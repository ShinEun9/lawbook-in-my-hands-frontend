import React, {useContext} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from "react-native";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import moreButtonImagePath from "../../img/more.png";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {LoginContext} from "../../store/loginStore";

function CustomDrawerContent({navigation}) {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const handle프로필수정ButtonPress = () => {
        navigation.navigate("MyPage")
    }

    const handleLogoutButtonPress = async () => {
        await asyncStorage.removeItem("@access_token");
        setIsLogin(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>내 손안의 법전</Text>
            </View>
            <TouchableOpacity style={styles.profileContainer} onPress={handle프로필수정ButtonPress}>
                <View
                    style={{
                        width: 100,
                        height: 40,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Image
                        source={require("../../img/user.png")}
                        style={{height: 40, width: 40}}
                    />
                    <View style={{height: 40, justifyContent: "space-between"}}>
                        <Text style={styles.profileName}>신은수</Text>
                        <Text style={styles.profileNickName}>은구찡</Text>
                    </View>

                    {/*<Text style={styles.profileName}>신은수</Text>*/}
                    {/*<Text style={{fontSize: "16"}}>은구찡</Text>*/}
                </View>
                <CustomButton content={"프로필 수정"} handlePressButton={handle프로필수정ButtonPress}
                              width={"100px"} height={"40px"} background={colors.pointBlue}/>
            </TouchableOpacity>

            <View style={styles.menuContainer}>
                <Text style={styles.menuTitle}>서비스</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("SearchPage")
                }}>
                    <Text style={{
                        ...styles.menuItem,
                        // color: route.name === "SearchPage" ? `${colors.pointBlue}` : "black"
                    }}>AI 판례 추천 서비스</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("ScrapPage")
                }}>
                    <Text style={styles.menuItem}>나의 스크랩</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Text style={styles.button}>비밀번호 변경</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogoutButtonPress}>
                    <Text style={styles.button}>로그아웃</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.button}>계정탈퇴</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CustomDrawerContent;

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    titleContainer: {
        padding: 15
    },
    title: {
        fontFamily: "SCDream7",
        fontSize: "22",
    },
    profileContainer: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    profileName: {
        fontSize: "18",
        marginBottom: 10,
        fontWeight: "400"
    },
    profileNickName: {
        fontSize: "16",
        // color: "rgba(0,0,0,0.5)"
    },
    menuContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#F8F8F8"
    },
    menuTitle: {
        fontSize: "20",
        fontWeight: "600",
        marginBottom: 20
    },
    menuItem: {
        fontSize: "18",
        fontWeight: "400",
        marginBottom: 20,
        color: "rgba(0,0,0,0.5)"
    },
    buttonContainer: {
        padding: 15,
    },
    button: {
        color: "#c4c4c4",
        fontSize: "16",
        fontWeight: "400",
        marginBottom: 14
    }
}

