import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import SearchWritePage from "../SearchPage/SearchWritePage";
import SearchResultPage from "../SearchPage/SearchResultPage";
import SearchDetailPage from "../SearchPage/SearchDetailPage";
import {createStackNavigator} from "@react-navigation/stack";
import ScrapListPage from "./ScrapListPage";

function ScrapPage({navigation: drawerNavigation}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName={"ScrapListPage"}
                         screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
            <Stack.Screen name="ScrapListPage"
                          component={({navigation}) =>
                              <ScrapListPage navigation={navigation} drawerNavigation={drawerNavigation}/>}
                          options={{headerShown: false}}/>
            <Stack.Screen name="SearchDetailPage"
                          component={({navigation, route}) =>
                              <SearchDetailPage navigation={navigation} drawerNavigation={drawerNavigation}
                                                route={route}/>}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default ScrapPage;

