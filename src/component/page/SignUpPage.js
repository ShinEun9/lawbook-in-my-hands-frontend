import React from 'react';
import styled from "styled-components"
import {SafeAreaView, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import SignUpPageHeader from "../template/SignUpPageHeader";
import {colors} from "../../variable/color";

function SignUpPage({navigation}) {

    const handleSignUpButtonClick = () => {
        // alert("완료");
        navigation.navigate('LoginPage');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SignUpPageHeader navigation={navigation}/>
            </View>

            <View style={styles.signUpForm}>
                <StyledInputContainer>
                    <CustomInput placeholder={"아이디"} width={"350"} height={"60px"}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"비밀번호"} width={"350"} height={"60px"}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"이름"} width={"350"} height={"60px"}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"닉네임"} width={"350"} height={"60px"}/>
                </StyledInputContainer>


                <View style={styles.buttonContainer}>
                    <CustomButton content={"회원가입"} handlePressButton={handleSignUpButtonClick} width={"350px"}
                                  height={"60px"}
                                  background={colors.pointBlue}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPage;

const StyledInputContainer = styled(View)`
  width: 350px;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;


const styles = {
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        flex: 1,
        width: "100%",
    },
    signUpForm: {
        flex: 10,
        // paddingVertical: 30,
    },
    buttonContainer: {
        width: 350,
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
    }
}