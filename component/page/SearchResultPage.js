import React from 'react';
import {Text, View} from "react-native";

function SearchResultPage({navigation, route}) {
    const {inputValue} = route.params;
    return (
        <View style={styles.container}>
            <Text>{inputValue}</Text>
        </View>
    );
}

export default SearchResultPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
