import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchWritePage from "./SearchWritePage";
import SearchResultPage from "./SearchResultPage";
import SearchDetailPage from "./SearchDetailPage";
import {Image, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import moreButtonImagePath from "../../img/more.png";

function SearchPage({navigation: drawerNavigation}) {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={"SearchWritePage"}
                         screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
            <Stack.Screen name="SearchWritePage"
                          component={({navigation}) =>
                              <SearchWritePage navigation={navigation} drawerNavigation={drawerNavigation}/>}
                          options={{headerShown: false}}/>
            <Stack.Screen name="SearchResultPage"
                          component={({navigation, route}) =>
                              <SearchResultPage navigation={navigation} drawerNavigation={drawerNavigation}
                                                route={route}/>}
                          options={{headerShown: false}}/>
            <Stack.Screen name="SearchDetailPage" component={SearchDetailPage} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default SearchPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}