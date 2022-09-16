import React, {useCallback, useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "./component/page/MainPage";
import LoginPage from "./component/page/LoginPage";
import SearchPage from "./component/page/SearchPage";
import MyScrapPage from "./component/page/MyScrapPage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import SignUpPage from "./component/page/SignUpPage";

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    useEffect(() => {
        // await Font.loadAsync({
        //     JuaRegular: require("./assets/fonts/Jua-Regular.ttf"),
        // });
        setIsReady(true);
    }, []);

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            {
                isReady &&
                isLogin ?
                    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="AI 법률 조회"
                                      screenOptions={{
                                          drawerType: "front"
                                      }}
                    >
                        <Drawer.Screen name="AI 법률 조회" component={SearchPage} options={{headerShown: false}}/>
                        <Drawer.Screen name="나의 스크랩" component={MyScrapPage} options={{headerShown: false}}/>
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
    );
}