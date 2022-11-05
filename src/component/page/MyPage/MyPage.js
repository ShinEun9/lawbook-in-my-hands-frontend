import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MyProfileEditPage from "./MyProfileEditPage";

function MyPage({navigation: drawerNavigation}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={"MyProfileEditPage"}
                         screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
            <Stack.Screen name="MyProfileEditPage" options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                        <MyProfileEditPage navigation={navigation} drawerNavigation={drawerNavigation}
                                           route={route}/>
                }
            </Stack.Screen>
        </Stack.Navigator>

    );
}

export default MyPage;

