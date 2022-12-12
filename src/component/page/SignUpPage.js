import React, {useState} from 'react';
import styled from "styled-components"
import {Alert, Dimensions, Platform, SafeAreaView, View} from "react-native";
import CustomInput from "../atom/CustomInput";
import SignUpPageHeader from "../template/SignUpPageHeader";
import {colors} from "../../variable/color";
import {useInputs} from "../../hooks/useInputs";
import axios from "axios";
import CustomButton from "../atom/CustomButton";

function SignUpPage({navigation}) {
    const [value, onChange] = useInputs({loginId: "", password: "", name: "", nickname: ""})
    const [idCheck, setIdCheck] = useState(false);

    const handleSignUpButtonClick = () => {
        if (idCheck) {
            axios.post("http://3.39.59.151:5000/signup", value)
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
        axios.get(`http://3.39.59.151:5000/loginid/${value.loginId}`)
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

            <View style={{...styles.signUpForm, paddingTop: Platform.OS === "ios" ? 0 : 30}}>
                <StyledInputContainer>
                    <CustomInput placeholder={"LoginID"} width={Dimensions.get('window').width * 0.46} height={"60px"}
                                 name={"loginId"}
                                 value={value.loginId} onChange={onChange}/>
                    <View style={{marginLeft: Dimensions.get('window').width * 0.04}}>
                        <CustomButton type={"b"} width={Dimensions.get('window').width * 0.3} height={"50px"}
                                      borderRadius={50}
                                      pointColor={colors.pointBlue}
                                      handlePressButton={idCheckButtonClick}>
                            중복 확인
                        </CustomButton>
                    </View>

                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"Password"} width={Dimensions.get('window').width * 0.8} height={"60px"}
                                 name={"password"}
                                 value={value.password} onChange={onChange}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"Name"} width={Dimensions.get('window').width * 0.8} height={"60px"}
                                 name={"name"}
                                 value={value.name} onChange={onChange}/>
                </StyledInputContainer>

                <StyledInputContainer>
                    <CustomInput placeholder={"NickName"} width={Dimensions.get('window').width * 0.8} height={"60px"}
                                 name={"nickname"}
                                 value={value.nickname} onChange={onChange}/>
                </StyledInputContainer>


                <View style={styles.buttonContainer}>
                    <CustomButton width={Dimensions.get('window').width * 0.5} height={"60px"} borderRadius={50}
                                  pointColor={colors.pointBlue}
                                  handlePressButton={handleSignUpButtonClick}>
                        회원가입
                    </CustomButton>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPage;

const StyledInputContainer = styled(View)`
  width: 350px;
  flex-direction: row;
  align-items: center;
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