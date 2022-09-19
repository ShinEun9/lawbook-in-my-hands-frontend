import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchWritePage from "./SearchWritePage";
import SearchResultPage from "./SearchResultPage";
import SearchDetailPage from "./SearchDetailPage";

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
            <Stack.Screen name="SearchDetailPage" component={SearchDetailPage}/>
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