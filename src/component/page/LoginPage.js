import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Alert, Image, SafeAreaView, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import {LoginContext} from "../../store/loginStore";
import moreButtonImagePath from "../../img/more.png";
import {useInputs} from "../../hooks/useInputs";
// import {storeToken} from "../../function/storeToken";

function LoginPage({navigation}) {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const [value, onChange] = useInputs({loginId: "", password: ""});

    const handleLoginButtonClick = () => {
        axios.post(`http://127.0.0.1:5000/login`, value)
            .then(async(res) => {
                if(res.status===200){
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
                        { text: "확인" }
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
                style={{height: 300, width: 300}}
                source={require('../../img/logo.png')}
            />
            <View style={{marginBottom: 10}}>
                <CustomInput name="loginId" placeholder={"아이디"} width={"260px"} height={"40px"} value={value.loginId}
                             onChange={onChange}/>
            </View>
            <View style={{marginBottom: 45}}>
                <CustomInput name="password" placeholder={"비밀번호"} width={"260px"} height={"40px"} value={value.password}
                             onChange={onChange} type={"password"}/>
            </View>
            <View style={{marginBottom: 20}}>
                <CustomButton content={"로그인"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"40px"}
                              background={colors.pointBlue}/>
            </View>
            <CustomButton content={"회원가입"} handlePressButton={handleSignUpButtonClick} width={"260px"} height={"40px"}
                          background={colors.blue2}/>

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