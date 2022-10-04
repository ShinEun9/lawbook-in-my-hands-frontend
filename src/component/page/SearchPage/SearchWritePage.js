import React from 'react';
import {Alert, SafeAreaView, View} from "react-native";
import CustomMultililneInput from "../../atom/CustomMultililneInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";
import {useInput} from "../../../hooks/useInput";
import CustomHeader from "../../template/CustomHeader";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


function SearchWritePage({navigation: stackNavigation, drawerNavigation, route}) {
    const [inputValue, onChange] = useInput(!route.params ? "" : route.params.routeParams);

    const handleSearchButtonClick = async () => {
        if (inputValue !== "") {
            const token = await asyncStorage.getItem("@access_token");
            await axios.post('http://127.0.0.1:5000/consult', {content: inputValue}, {headers: {Authorization: `Bearer ${token}`}})
                .then((res) => {
                    // console.log(res.data.consult_id)
                    stackNavigation.navigate("SearchResultPage", {inputValue: inputValue})
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Alert.alert(
                "내용을 작성해주세요.",
                "",
                [{text: "확인"}]
            );
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomHeader content={"상담내용 작성"}
                              handleMoreButtonPress={() => {
                                  drawerNavigation.toggleDrawer()
                              }}
                />
            </View>

            <View style={styles.content}>
                <View style={{marginBottom: 30}}>
                    <CustomMultililneInput value={inputValue} onChange={onChange}/>
                </View>
                <CustomButton content={"AI 법률조회"} handlePressButton={handleSearchButtonClick} width={"260px"}
                              height={"40px"}
                              background={colors.pointBlue}/>
            </View>
        </SafeAreaView>
    );
}

export default SearchWritePage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        width: "100%",
    },
    content: {
        flex: 4,
        alignItems: "center"
    }
}