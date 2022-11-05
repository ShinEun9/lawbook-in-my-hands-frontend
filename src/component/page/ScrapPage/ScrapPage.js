import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import SearchWritePage from "../SearchPage/SearchWritePage";
import SearchResultPage from "../SearchPage/SearchResultPage";
import SearchDetailPage from "../SearchPage/SearchDetailPage";
import {createStackNavigator} from "@react-navigation/stack";
import ScrapListPage from "./ScrapListPage";
import ScrapSearchPage from "./ScrapSearchPage";

function ScrapPage({navigation: drawerNavigation}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={"ScrapListPage"}
                         screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
            <Stack.Screen name="ScrapListPage" options={{
                headerShown: false,
            }}>
                {
                    ({navigation}) =>
                        <ScrapListPage navigation={navigation} drawerNavigation={drawerNavigation}/>
                }
            </Stack.Screen>
            <Stack.Screen name="ScrapSearchPage" options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                        <ScrapSearchPage navigation={navigation} drawerNavigation={drawerNavigation}
                                         route={route}/>
                }
            </Stack.Screen>
            <Stack.Screen name="ScrapSearchResultPage" options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                        <SearchResultPage navigation={navigation} drawerNavigation={drawerNavigation}
                                          route={route}/>
                }
            </Stack.Screen>
            <Stack.Screen name="ScrapDetailPage" options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                        <SearchDetailPage navigation={navigation} drawerNavigation={drawerNavigation}
                                          route={route}/>
                }
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default ScrapPage;


