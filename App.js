import {StatusBar} from 'expo-status-bar';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import CustomInput from "./component/atom/CustomInput";
import CustomButton from "./component/atom/CustomButton";
import {colors} from "./variable/color";
import MyTabs from "./component/template/MyTabs"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from "./component/page/MainPage";
import LoginPage from "./component/page/LoginPage";

const Stack = createStackNavigator();


export default function App() {
    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"LoginPage"}>
                    <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
                    <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>

                    {/*<Text>Open up App.js to start working on your app!</Text>*/}
                    {/*<StatusBar style="auto" />*/}
                    {/*<CustomInput placeholder={"아이디"} width={"260px"} height={"40px"}/>*/}
                    {/*<CustomInput placeholder={"비밀번호"} width={"260px"} height={"40px"}/>*/}
                    {/*<CustomButton content={"로그인"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"40px"}*/}
                    {/*              background={colors.pointBlue}/>*/}
                    {/*<MyTabs/>*/}
                </Stack.Navigator>
            </NavigationContainer>

    );
}