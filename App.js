import React, {useCallback, useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import MainPage from "./component/page/MainPage";
import LoginPage from "./component/page/LoginPage";

export default function App() {
    const [isReady, setIsReady] = useState(false);

    useEffect(async () => {
        await Font.loadAsync({
            JuaRegular: require("./assets/fonts/Jua-Regular.ttf"),
        });
        setIsReady(true);
    }, []);

    const Stack = createStackNavigator();

    return (
        isReady &&
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"LoginPage"}>
                <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
                {/*<MyTabs/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}