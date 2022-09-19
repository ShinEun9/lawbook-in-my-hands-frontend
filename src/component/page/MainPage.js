import React from 'react';
import MyTabs from "../template/MyTabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SearchPage from "./SearchPage";
import MyScrapPage from "./MyScrapPage";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";


function MainPage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>MainPage</Text>
        </SafeAreaView>


    );
}

export default MainPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

