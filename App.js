import {StatusBar} from 'expo-status-bar';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import CustomInput from "./component/atom/CustomInput";
import CustomButton from "./component/atom/CustomButton";
import {colors} from "./variable/color";
import MyTabs from "./component/template/MyTabs"
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
    const handleLoginButtonClick = () => {
        Alert.alert("hi");
    }
    return (
        <View style={styles.container}>

            {/*<Text>Open up App.js to start working on your app!</Text>*/}
            {/*<StatusBar style="auto" />*/}
            {/*<CustomInput placeholder={"아이디"} width={"260px"} height={"40px"}/>*/}
            {/*<CustomInput placeholder={"비밀번호"} width={"260px"} height={"40px"}/>*/}
            {/*<CustomButton content={"로그인"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"40px"}*/}
            {/*              background={colors.pointBlue}/>*/}
            {/*<MyTabs/>*/}
            <NavigationContainer>
                <MyTabs/>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
