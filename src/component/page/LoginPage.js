import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import {LoginContext} from "../../store/loginStore";
import moreButtonImagePath from "../../img/more.png";
import {useInputs} from "../../hooks/useInputs";
import CustomIconButton from "../atom/CustomIconButton";
import CustomIconInput from "../atom/CustomIconInput";

// import {storeToken} from "../../function/storeToken";

function LoginPage({navigation}) {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const [value, onChange] = useInputs({loginId: "", password: ""});

    const handleLoginButtonClick = () => {
        axios.post(`http://127.0.0.1:5000/login`, value)
            .then(async (res) => {
                if (res.status === 200) {
                    console.log(res.data.access_token)
                    await AsyncStorage.setItem('@access_token', res.data.access_token)
                    setIsLogin(true);
                }
                // console.log(res);
                // console.log(res.data)
            })
            .catch((err) => {
                // console.log(err);
                Alert.alert(
                    "아이디 또는 비밀번호가 틀렸습니다.",
                    "다시 시도해주세요.",
                    [
                        {text: "확인"}
                    ]
                );
            })
    }

    const handleSignUpButtonClick = () => {
        navigation.navigate("SignUpPage")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{height: 350, width: 350}}
                source={require('../../img/logo.png')}/>
            <View style={{marginBottom: 10}}>
                <CustomIconInput name="loginId" placeholder={"LoginID"} width={"260px"} height={"45px"}
                                 value={value.loginId}
                                 onChange={onChange} iconName={"user"}/>
            </View>
            <View style={{marginBottom: 45}}>
                <CustomIconInput name="password" placeholder={"Password"} width={"260px"} height={"45px"}
                                 value={value.password}
                                 onChange={onChange} type={"password"} iconName={"lock"}/>

            </View>
            <View style={{marginBottom: 20}}>
                <CustomButton content={"로그인"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"50px"}
                              background={colors.gold}/>
            </View>

            <CustomButton content={"회원가입"} handlePressButton={handleSignUpButtonClick} width={"260px"}
                          height={"50px"} background={colors.pointBlue}/>

        </SafeAreaView>
    );
}

export default LoginPage;


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}