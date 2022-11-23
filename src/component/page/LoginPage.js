import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {
    StyleSheet,
    ActivityIndicator,
    Alert, Button,
    Image, Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, Text, TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from "../../variable/color";
import {LoginContext} from "../../store/loginStore";
import {useInputs} from "../../hooks/useInputs";
import CustomIconInput from "../atom/CustomIconInput";
import CustomButton from "../atom/CustomButton";

function LoginPage({navigation}) {
    const {isLogin, setIsLogin} = useContext(LoginContext);
    const [value, onChange] = useInputs({loginId: "", password: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginButtonClick = () => {
        setIsLoading(true)
        axios.post(`http://3.39.59.151:5000/login`, value)
            .then(async (res) => {
                if (res.status === 200) {
                    const {access_token, loginid, name, nickname} = res.data
                    await AsyncStorage.setItem('@access_token', access_token)
                    await AsyncStorage.setItem("@name", name);
                    await AsyncStorage.setItem("@loginId", loginid);
                    await AsyncStorage.setItem("@nickname", nickname);
                    setIsLogin(true);
                    setIsLoading(false);
                }
                // console.log(res);
                // console.log(res.data)
            })
            .catch((err) => {
                // console.log(err);
                setIsLoading(false);
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
                style={{height: 280, width: 280}}
                source={require('../../img/logo.png')}/>
            {/*<View style={{marginBottom: 10}}>*/}
            {/*    <CustomIconInput name="loginId" placeholder={"LoginID"} width={"240px"} height={"45px"}*/}
            {/*                     value={value.loginId}*/}
            {/*                     onChange={onChange} iconName={"user"}/>*/}
            {/*</View>*/}
            {/*<View style={{marginBottom: 35}}>*/}
            {/*    <CustomIconInput name="password" placeholder={"Password"} width={"240px"} height={"45px"}*/}
            {/*                     value={value.password}*/}
            {/*                     onChange={onChange} type={"password"} iconName={"lock"}/>*/}

            {/*</View>*/}
            {/*<View style={{marginBottom: 20}}>*/}
            {/*    <CustomButton handlePressButton={handleLoginButtonClick} width={"240px"} height={"45px"}*/}
            {/*                  pointColor={colors.gold} borderRadius={"5px"}>*/}
            {/*        {isLoading ? <ActivityIndicator/> : "로그인"}*/}
            {/*    </CustomButton>*/}
            {/*</View>*/}

            {/*<CustomButton handlePressButton={handleSignUpButtonClick} width={"240px"}*/}
            {/*              height={"45px"} pointColor={colors.pointBlue} borderRadius={"5px"}>*/}
            {/*    회원가입*/}
            {/*</CustomButton>*/}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{marginBottom: 10}}>
                    <CustomIconInput name="loginId" placeholder={"LoginID"} width={"240px"} height={"45px"}
                                     value={value.loginId}
                                     onChange={onChange} iconName={"user"}/>
                </View>
                <View style={{marginBottom: 35}}>
                    <CustomIconInput name="password" placeholder={"Password"} width={"240px"} height={"45px"}
                                     value={value.password}
                                     onChange={onChange} type={"password"} iconName={"lock"}/>
                </View>
            </KeyboardAvoidingView>

            <View style={{marginBottom: 20}}>
                <CustomButton handlePressButton={handleLoginButtonClick} width={"240px"} height={"45px"}
                              pointColor={colors.gold} borderRadius={"5px"}>
                    {isLoading ? <ActivityIndicator/> : "로그인"}
                </CustomButton>
            </View>

            <CustomButton handlePressButton={handleSignUpButtonClick} width={"240px"}
                          height={"45px"} pointColor={colors.pointBlue} borderRadius={"5px"}>
                회원가입
            </CustomButton>

        </SafeAreaView>
    );
}

export default LoginPage;


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}

