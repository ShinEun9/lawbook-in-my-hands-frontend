import React from 'react';
import {Text, View} from "react-native";

function MyScrapPage(props) {
    return (
        <View style={styles.container}>
            <Text>MyPage</Text>
        </View>
    );
}

export default MyScrapPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}