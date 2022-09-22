import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import SearchPage from "./src/component/page/SearchPage/SearchPage";
import ScrapPage from "./src/component/page/ScrapPage/ScrapPage";
import LoginPage from "./src/component/page/LoginPage";
import SignUpPage from "./src/component/page/SignUpPage";
import {LoginContext} from "./src/store/loginStore";
import MyPage from "./src/component/page/MyPage/MyPage";

export default function App() {
    const [isReady, setIsReady] = useState(false); // font가 load 되면 isReady를 true로 변경
    const [isLogin, setIsLogin] = useState(false); // 로그인 된 상태이면 isLogin을 true로 변경

    const loadFont = async () => {
        await Font.loadAsync({
            JuaRegular: require("./assets/fonts/Jua-Regular.ttf"),
        });
    }
    useEffect(() => {
        loadFont();
        setIsReady(true);
    }, []);


    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
        <LoginContext.Provider value={{isLogin, setIsLogin}}>
            <NavigationContainer>
                {
                    isReady &&
                    isLogin ?
                        <Drawer.Navigator
                            useLegacyImplementation={true}
                            initialRouteName="AI 법률 조회"
                            screenOptions={{
                                drawerPosition: 'right',
                                drawerType: "front",
                                swipeEnabled: true,
                                drawerHideStatusBarOnOpen: false
                            }}
                        >
                            <Drawer.Screen name="AI 법률 조회" component={SearchPage} options={{headerShown: false}}/>
                            <Drawer.Screen name="나의 스크랩" component={ScrapPage} options={{headerShown: false}}/>
                            <Drawer.Screen name="마이 페이지" component={MyPage} options={{headerShown: false}}/>

                        </Drawer.Navigator>
                        :
                        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false,}}>
                            <>
                                <Stack.Screen name="LoginPage" component={LoginPage}/>
                                <Stack.Screen name="SignUpPage" component={SignUpPage}/>
                            </>
                        </Stack.Navigator>
                }
            </NavigationContainer>
        </LoginContext.Provider>
    );
}