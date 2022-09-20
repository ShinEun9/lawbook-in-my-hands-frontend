import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import {LoginContext} from "../../store/loginStore";
import moreButtonImagePath from "../../img/more.png";

function LoginPage({navigation}) {
    const {isLogin, setIsLogin} = useContext(LoginContext);

    const handleLoginButtonClick = () => {
        setIsLogin(true);
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
                <CustomInput placeholder={"아이디"} width={"260px"} height={"40px"}/>
            </View>
            <View style={{marginBottom: 45}}>
                <CustomInput placeholder={"비밀번호"} width={"260px"} height={"40px"}/>
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