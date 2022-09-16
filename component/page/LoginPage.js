import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";

function LoginPage(props) {
    const {navigate} = props.navigation
    const handleLoginButtonClick = () => {
        // console.log("hi")
        navigate("MainPage")
    }

    return (
        <View style={styles.container}>
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
            <CustomButton content={"회원가입"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"40px"}
                          background={colors.blue2}/>

        </View>
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