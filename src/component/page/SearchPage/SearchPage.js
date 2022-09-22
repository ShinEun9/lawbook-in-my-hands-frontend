import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchWritePage from "./SearchWritePage";
import SearchResultPage from "./SearchResultPage";
import SearchDetailPage from "./SearchDetailPage";

function SearchPage({navigation: drawerNavigation}) {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName={"SearchWritePage"}
                         screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
            <Stack.Screen name="SearchWritePage" options={{headerShown: false}}>
                {
                    ({navigation, route}) => <SearchWritePage navigation={navigation}
                                                              drawerNavigation={drawerNavigation} route={route}/>
                }

            </Stack.Screen>
            <Stack.Screen name="SearchResultPage"
                          options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                    <SearchResultPage navigation={navigation} drawerNavigation={drawerNavigation}
                                      route={route}/>
                }
            </Stack.Screen>
            <Stack.Screen name="SearchDetailPage" options={{headerShown: false}}>
                {
                    ({navigation, route}) =>
                        <SearchDetailPage navigation={navigation} drawerNavigation={drawerNavigation}
                                          route={route}/>
                }
            </Stack.Screen>
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