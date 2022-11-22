import React, {useContext} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity, TouchableHighlight} from "react-native";
import {colors} from "../../variable/color";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {LoginContext} from "../../store/loginStore";
import {AntDesign, FontAwesome} from "@expo/vector-icons"
import logoImagePath from "../../img/logo2.png";

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

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#d1d0d5"
                onPress={handle프로필수정ButtonPress}
            >
                <View style={styles.profileContainer}>
                    <FontAwesome name={"user-circle"} color={"#eeeeee"} size={40} style={{marginRight: 10}}/>
                    <View>
                        <Text style={styles.profileName}>신은수</Text>
                        <Text style={styles.profileNickName}>은구찡(ses2201)</Text>
                    </View>
                </View>

            </TouchableHighlight>

            <View style={styles.menuContainer}>
                <Text style={styles.menuTitle}>서비스</Text>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#d1d0d5"
                    onPress={() => {
                        navigation.navigate("SearchPage")
                    }}>
                    <View style={styles.menuItem}>
                        <FontAwesome name={"search"} size={20} color={`${colors.pointBlue2}`}
                                     style={{marginRight: 10}}/>
                        <Text style={styles.menuItemText}>AI 판례 추천 서비스</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#d1d0d5"
                    onPress={() => {
                        navigation.navigate("ScrapPage")
                    }}>
                    <View style={styles.menuItem}>
                        <AntDesign name={"star"} size={20} color={"#FCE205"} style={{marginRight: 10}}/>
                        <Text style={styles.menuItemText}>나의 스크랩</Text>
                    </View>
                </TouchableHighlight>
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
        width: "100%",
        padding: 15,
    },
    title: {
        fontFamily: "DrawerTitle",
        fontSize: "22",

    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:15,
        paddingVertical: 20
    },
    profileName: {
        fontFamily: "NanumSquareB",
        fontSize: "16",
        marginBottom: 10,
    },
    profileNickName: {
        fontFamily: "NanumSquareR",
        fontSize: "14",
        // color: "rgba(0,0,0,0.5)"
    },
    menuContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#F8F8F8",
        marginBottom: 10
    },
    menuTitle: {
        fontFamily: "NanumSquareEB",
        fontSize: "18",
        paddingTop: 20,
        paddingHorizontal: 15,
        marginBottom: 8
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    menuItemText: {
        fontFamily: "NanumSquareB",
        fontSize: "16",
        color: "rgba(0,0,0,0.7)"
    },
    buttonContainer: {
        padding: 15,
    },
    button: {
        fontFamily: "NanumSquareR",
        color: "rgba(0,0,0,0.5)",
        fontSize: "14",
        marginBottom: 20
    }
}

