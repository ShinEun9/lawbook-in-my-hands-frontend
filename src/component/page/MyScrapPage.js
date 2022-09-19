import React from 'react';
import {SafeAreaView, Text, View} from "react-native";

function MyScrapPage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>MyPage</Text>
        </SafeAreaView>
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