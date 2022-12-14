import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {LoginContext} from "./src/store/loginStore";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import CustomDrawerContent from "./src/component/template/CustomDrawerContent";
import SearchPage from "./src/component/page/SearchPage/SearchPage";
import ScrapPage from "./src/component/page/ScrapPage/ScrapPage";
import LoginPage from "./src/component/page/LoginPage";
import SignUpPage from "./src/component/page/SignUpPage";
import MyPage from "./src/component/page/MyPage/MyPage";
import PasswordChangePage from "./src/component/page/PasswordChangePage";
import {LogBox} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// react, hooks, library, component, style 등의 순으로 import 정리

LogBox.ignoreLogs(['Sending']);
LogBox.ignoreLogs(['Expected']);

export default function App() {
    const [isReady, setIsReady] = useState(false); // font가 load 되면 isReady를 true로 변경
    const [isLogin, setIsLogin] = useState(false); // 로그인 된 상태이면 isLogin을 true로 변경

    const initialize = async () => {
        await Font.loadAsync({
            NanumSquareR: require("./assets/fonts/NanumSquareR.otf"),
            NanumSquareB: require("./assets/fonts/NanumSquareB.otf"),
            NanumSquareEB: require("./assets/fonts/NanumSquareEB.otf"),
            DrawerTitle: require("./assets/fonts/문화재돌봄체Bold.ttf")
        }).then(() => {
            setIsReady(true);
            checkIsLoginOrNot();
        }).catch((error) => {
            setIsReady(true);
        })
    }

    const checkIsLoginOrNot = async () => {
        const token = await asyncStorage.getItem("@access_token");
        if (token) setIsLogin(true)
        else setIsLogin(false)
    }

    useEffect(() => {
        initialize();
    }, []);


    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            <StatusBar style="dark" />


            <NavigationContainer>
                {
                    isReady ?
                        isLogin ?
                            <Drawer.Navigator
                                drawerContent={(props) => <CustomDrawerContent {...props} />}
                                useLegacyImplementation={true}
                                initialRouteName="AI 법률 조회"
                                screenOptions={{
                                    drawerPosition: 'right',
                                    drawerType: "front",
                                    swipeEnabled: true,
                                    drawerHideStatusBarOnOpen: false,
                                }}
                            >
                                <Drawer.Screen name="SearchPage" component={SearchPage} options={{headerShown: false}}/>
                                <Drawer.Screen name="ScrapPage" component={ScrapPage} options={{headerShown: false}}/>
                                <Drawer.Screen name="MyPage" component={MyPage} options={{headerShown: false}}/>
                                <Drawer.Screen name="PasswordChangePage" component={PasswordChangePage} options={{
                                    headerShown: false
                                }}/>

                            </Drawer.Navigator>
                            :
                            <Stack.Navigator initialRouteName="LoginPage"
                                             screenOptions={{
                                                 headerShown: false,
                                                 cardStyle: {
                                                     backgroundColor: 'white',
                                                 },
                                             }}>
                                <>
                                    <Stack.Screen name="LoginPage" component={LoginPage}/>
                                    <Stack.Screen name="SignUpPage" component={SignUpPage}/>
                                </>
                            </Stack.Navigator>
                        :
                        null
                }
            </NavigationContainer>
        </LoginContext.Provider>
    );
}