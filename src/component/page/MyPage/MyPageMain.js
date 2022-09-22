import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";

function MyPageMain({navigation: stackNavigation, drawerNavigation}) {
    const handleEditInfoButtonPress = ()=>{
        stackNavigation.navigate("MyProfileEditPage")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomHeader content={"마이페이지"}
                              handleMoreButtonPress={() => {
                                  drawerNavigation.toggleDrawer()
                              }}
                />
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.profileContainer} onPress={handleEditInfoButtonPress}>
                    <View>
                        <Text style={styles.nickname}>은구찡</Text>
                        <Text style={styles.name}>신은수</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>

            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default MyPageMain;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        width: "100%",
        // backgroundColor: "orange",
    },
    content: {
        flex: 9,
        alignItems: "center",
        width: "100%",

    },
    profileContainer: {
        width: "100%",
        padding: 20,
        borderBottomColor: "rgb(241,241,241)",
        borderBottomWidth: "5px",
    },
    nickname:{
        fontSize: "20px",
        fontWeight: "500",
        marginBottom: 10
    }
}
