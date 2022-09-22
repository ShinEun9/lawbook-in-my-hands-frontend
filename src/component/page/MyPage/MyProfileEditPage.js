import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import CustomBackHeader from "../../template/CustomBackHeader";
import CustomInput from "../../atom/CustomInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";

function MyProfileEditPage({navigation: stackNavigation, drawerNavigation}) {
    const handleEditInfoButtonPress = () => {
        stackNavigation.navigate("MyPageMain")
    }
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
                    <Text style={{fontSize: "15px", color: `${colors.darkgrey}`}}>이름</Text>
                    <CustomInput width={"300"} height={"40px"}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{fontSize: "15px", color: `${colors.darkgrey}`}}>닉네임</Text>
                    <CustomInput width={"300"} height={"40px"}/>
                </View>

                <CustomButton content={"정보수정"} handlePressButton={handleEditInfoButtonPress} width={"350px"}
                              height={"60px"}
                              background={colors.pointBlue}/>

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
        // backgroundColor: "orange",
    },
    content: {
        flex: 9,
        alignItems: "center",
        width: "100%",

    },
    inputContainer: {
        width: 350,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
}

