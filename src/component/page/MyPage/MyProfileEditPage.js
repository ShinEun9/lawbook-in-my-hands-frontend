import React, {useEffect, useState} from 'react';
import {useInputs} from "../../../hooks/useInputs";
import axios from "axios";
import {ActivityIndicator, Alert, Dimensions, SafeAreaView, Text, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import CustomInput from "../../atom/CustomInput";
import CustomButton from "../../atom/CustomButton";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {colors} from "../../../variable/color";

function MyProfileEditPage({navigation: stackNavigation, drawerNavigation}) {
    const [value, onChange, setValue] = useInputs({nickname: "", name: ""});
    const [isLoading, setIsLoading] = useState(false);
    const handleEditInfoButtonPress = async () => {
        setIsLoading(true);
        const token = await asyncStorage.getItem("@access_token");
        await axios.post(`http://3.39.59.151:5000/user/profile`, value, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(async () => {
                await asyncStorage.setItem("@nickname", value.nickname);
                await asyncStorage.setItem("@name", value.name)
                await Alert.alert(
                    "회원 정보 수정이 완료 되었습니다.",
                    "",
                    [
                        {
                            text: "확인"
                        }
                    ]
                );
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const fetchUserInfo = async () => {
        const nickname = await asyncStorage.getItem("@nickname");
        const name = await asyncStorage.getItem("@name");
        await setValue({nickname, name})
    }

    useEffect(() => {
        fetchUserInfo();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomHeader content={"마이페이지 수정"}
                              handleMoreButtonPress={() => {
                                  drawerNavigation.toggleDrawer()
                              }}
                />
            </View>

            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>이름</Text>
                    <CustomInput width={Dimensions.get('window').width * 0.6} height={"40px"} name={"name"}
                                 onChange={onChange} value={value.name}/>
                </View>

                <View style={{...styles.inputContainer, marginBottom: 60}}>
                    <Text style={styles.title}>닉네임</Text>
                    <CustomInput width={Dimensions.get('window').width * 0.6} height={"40px"} name={"nickname"}
                                 onChange={onChange}
                                 value={value.nickname}/>
                </View>

                <CustomButton handlePressButton={handleEditInfoButtonPress} width={Dimensions.get('window').width * 0.5}
                              height={"60px"}
                              pointColor={colors.pointBlue} borderRadius={50}>
                    {
                        isLoading ? <ActivityIndicator/> : "정보수정"
                    }
                </CustomButton>

            </View>
        </SafeAreaView>);
}

export default MyProfileEditPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        width: "100%",
    },
    content: {
        flex: 9,
        paddingTop: 40,
        alignItems: "center",
        width: "100%",

    },
    inputContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
    },
    title: {
        width: Dimensions.get('window').width * 0.2,
        fontSize: 15,
        color: `${colors.pointBlue}`
    }
}

