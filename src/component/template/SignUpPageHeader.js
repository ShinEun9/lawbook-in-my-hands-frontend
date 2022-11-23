import React from 'react';
import {Platform, Text, TouchableOpacity, View} from "react-native";
import {Entypo} from "@expo/vector-icons";

function SignUpPageHeader({navigation}) {
    return (
        <View style={{...styles.container, marginTop: Platform.OS==="ios"?0:30}}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("LoginPage")
            }}>
                <Entypo name="chevron-left" size={24} color="rgb(71, 67, 72)"/>
            </TouchableOpacity>
            <Text style={styles.text}>회원가입</Text>
        </View>
    );
}

export default SignUpPageHeader;

const styles = {
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 25
    },
    text: {
        fontSize: 20,
        fontWeight: "800",
        marginLeft: 20,
        // color: "rgb(71, 67, 72)"
    }
}