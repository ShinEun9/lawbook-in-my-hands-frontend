import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyPage from "./MyPage";
import MyScrapPage from "./MyScrapPage";
import SearchPage from "./SearchPage";
import {colors} from "../../variable/color";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: colors.pointBlue,
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 14
                }
            }}
        >
            <Tab.Screen
                name="SearchPage"
                component={SearchPage}
                options={{
                    tabBarLabel: 'AI 법률 조회',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="MyScrapPage"
                component={MyScrapPage}
                options={{
                    tabBarLabel: '나의 법전',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    tabBarLabel: '마이 페이지',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;