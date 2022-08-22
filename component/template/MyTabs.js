import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyPage from "../page/MyPage";
import MyScrapPage from "../page/MyScrapPage";
import SearchPage from "../page/SearchPage";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen
                    name="SearchPage"
                    component={SearchPage}
                    options={{
                        tabBarLabel: 'SearchPage',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="MyScrapPage"
                    component={MyScrapPage}
                    options={{
                        tabBarLabel: 'MyScrapPage',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="bell" color={color} size={size}/>
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="MyPage"
                    component={MyPage}
                    options={{
                        tabBarLabel: 'MyPage',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="account" color={color} size={size}/>
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

export default MyTabs;