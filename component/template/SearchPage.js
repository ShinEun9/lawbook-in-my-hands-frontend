import React from 'react';
import {Text, View} from "react-native";

function SearchPage(props) {
    return (
        <View style={styles.container}>
            <Text>MyPage</Text>
        </View>    );
}

export default SearchPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}