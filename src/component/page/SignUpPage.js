import React, {useState} from 'react';
import styled from "styled-components"
import {Alert, SafeAreaView, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import SignUpPageHeader from "../template/SignUpPageHeader";
import {colors} from "../../variable/color";
import {useInputs} from "../../hooks/useInputs";
import axios from "axios";

function SignUpPage({navigation}) {
    const [value, onChange] = useInputs({loginId: "", password: "", name: "", nickname: ""})
    const [idCheck, setIdCheck] = useState(false);

    const handleSignUpButtonClick = () => {
        if (idCheck) {
            axios.post("http://127.0.0.1:5000/signup", value)
                .then((res) => {
                    Alert.alert(
                        "회원가입이 완료되었습니다.",
                        "로그인 페이지로 이동합니다.",
                        [
                            {
                                text: "확인", onPress: () => {
                                    navigation.navigate('LoginPage');
                                }
                            }
                        ]
                    );
                })
                .catch((err) => {

                })
        } else {
            Alert.alert(
                "아이디 중복 확인을 먼저 해주세요.",
                "",
                [
                    {text: "확인"}
                ]
            );
        }
    }

    const idCheckButtonClick = () => {
        console.log(value.loginId);
        axios.get(`http://127.0.0.1:5000/loginid/${value.loginId}`)
            .then((res) => {
                Alert.alert(
                    "아이디 확인이 완료되었습니다.",
                    "",
                    [
                        {text: "확인"}
                    ]
                );
                setIdCheck(true);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert(
                    "중복된 아이디입니다.",
                    "아이디를 다시 입력해주세요.",
                    [
                        {text: "확인"}
                    ]
                );
                setIdCheck(false);
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SignUpPageHeader navigation={navigation}/>
            </View>

            <View style={styles.signUpForm}>
                <StyledInputContainer>
                    <CustomInput placeholder={"아이디"} width={"240px"} height={"60px"} name={"loginId"}
                                 value={value.loginId} onChange={onChange}/>
                    <View style={{marginLeft: 10}}>
                        <CustomButton content={"중복 확인"} handlePressButton={idCheckButtonClick} width={"100px"}
                                      height={"60px"}
                                      background={colors.pointBlue}/>
                    </View>

                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"비밀번호"} width={"350px"} height={"60px"} name={"password"}
                                 value={value.password} onChange={onChange}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"이름"} width={"350px"} height={"60px"} name={"name"}
                                 value={value.name} onChange={onChange}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"닉네임"} width={"350px"} height={"60px"} name={"nickname"}
                                 value={value.nickname} onChange={onChange}/>
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