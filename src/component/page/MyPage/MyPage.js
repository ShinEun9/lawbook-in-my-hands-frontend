import React from 'react';
import ScrapListPage from "../ScrapPage/ScrapListPage";
import ScrapSearchPage from "../ScrapPage/ScrapSearchPage";
import SearchDetailPage from "../SearchPage/SearchDetailPage";
import {createStackNavigator} from "@react-navigation/stack";
import MyPageMain from "./MyPageMain";
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

