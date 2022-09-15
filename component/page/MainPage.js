import React from 'react';
import MyTabs from "../template/MyTabs";
import {createDrawerNavigator} from '@react-navigation/drawer';
import SearchPage from "../template/SearchPageTemplate/SearchPage";
import MyScrapPage from "../template/MyScrapPageTemplate/MyScrapPage";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";

const Drawer = createDrawerNavigator();

function MainPage({navigation}) {
    return (
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="AI 법률 조회"
                          screenOptions={{
                              drawerType: "front"
                          }}
        >
            <Drawer.Screen name="AI 법률 조회" component={SearchPage} options={{headerShown: false}}/>
            <Drawer.Screen name="나의 스크랩" component={MyScrapPage} options={{headerShown: false}}/>
        </Drawer.Navigator>


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

