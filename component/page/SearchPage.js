import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import CustomMultililneInput from "../atom/CustomMultililneInput";
import CustomInput from "../atom/CustomInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import {createStackNavigator} from "@react-navigation/stack";
import SearchWritePage from "./SearchWritePage";
import SearchResultPage from "./SearchResultPage";

function SearchPage({navigation}) {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={"SearchWritePage"}
                         screenOptions={{
                             cardStyle: {
                                 backgroundColor: 'white',
                             }
                         }}
        >
            <Stack.Screen name="SearchWritePage" component={SearchWritePage}/>
            <Stack.Screen name="SearchResultPage" component={SearchResultPage}/>
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