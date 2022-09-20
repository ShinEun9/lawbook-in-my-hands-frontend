import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import {colors} from "../../variable/color";
import CustomButton from "../atom/CustomButton";
import {Entypo} from "@expo/vector-icons";

function SignUpPage({navigation}) {

    const handleSignUpButtonClick = () => {
        // alert("완료");
        navigation.navigate('LoginPage');
    }

    const idCheckButtonClick = () => {
    }

    const nicknameCheckButtonClick = () => {

    }

    const getCertificateNumClick = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    height: 50,
                    // backgroundColor: "yellow",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 25
                }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("LoginPage")
                    }}>
                        <Entypo name="chevron-left" size={24} color="rgb(71, 67, 72)"/>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        marginLeft: 20,
                        color: "rgb(71, 67, 72)"
                    }}>회원가입</Text>
                </View>
            </View>

            <View style={styles.signUpForm}>
                <View style={{
                    width: 350,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <View style={{marginRight: 10}}>
                        <CustomInput placeholder={"아이디"} width={"240px"} height={"60px"}/>
                    </View>
                    <CustomButton content={"아이디 확인"} handlePressButton={idCheckButtonClick} width={"100px"}
                                  height={"60px"}
                                  background={colors.pointBlue}/>
                </View>

                <View style={{
                    width: 350,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <CustomInput placeholder={"비밀번호"} width={"350"} height={"60px"}/>
                </View>

                <View style={{
                    width: 350,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <CustomInput placeholder={"비밀번호 확인"} width={"350"} height={"60px"}/>
                </View>

                <View style={{
                    width: 350,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <View style={{marginRight: 10}}>
                        <CustomInput placeholder={"아이디"} width={"240px"} height={"60px"}/>
                    </View>
                    <CustomButton content={"닉네임 확인"} handlePressButton={nicknameCheckButtonClick} width={"100px"}
                                  height={"60px"}
                                  background={colors.pointBlue}/>
                </View>

                <View style={{
                    width: 350,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <View style={{marginRight: 10}}>
                        <CustomInput placeholder={"휴대폰 번호"} width={"240px"} height={"60px"}/>
                    </View>
                    <CustomButton content={"인증번호 받기"} handlePressButton={getCertificateNumClick} width={"100px"}
                                  height={"60px"}
                                  background={colors.pointBlue}/>
                </View>

                <View style={{
                    width: 350,
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                }}>
                    <CustomButton content={"회원가입"} handlePressButton={handleSignUpButtonClick} width={"350px"}
                                  height={"60px"}
                                  background={colors.pointBlue}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPage;

const styles = {
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        // justifyContent: "center"
    },
    header: {
        flex: 1,
        width: "100%",
        // backgroundColor: "orange",
    },
    signUpForm: {
        flex: 9,
        justifyContent: "center"
    }
}