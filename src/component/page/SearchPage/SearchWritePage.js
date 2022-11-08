import React, {useState} from 'react';
import {ActivityIndicator, Alert, SafeAreaView, View} from "react-native";
import CustomMultililneInput from "../../atom/CustomMultililneInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";
import {useInput} from "../../../hooks/useInput";
import CustomHeader from "../../template/CustomHeader";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


function SearchWritePage({navigation: stackNavigation, drawerNavigation, route}) {
    const example = "제가 면허가 없습니다. 면허가 없는 채로 며칠 전에 술을 마시고 자동차를 운전했습니다. 그러다가 음주측정을 하는 것을 발견했는데 음주측정에 응하지 않고 도주를 했습니다. 무면허 음주 운전은 처벌을 얼마나 받을까요?"
    const [inputValue, onChange] = useInput(!route.params ? example : route.params.routeParams);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchButtonClick = async () => {
        setIsLoading(true)
        if (inputValue !== "") {
            const token = await asyncStorage.getItem("@access_token");
            await axios.post(`http://127.0.0.1:5000/consult`, {content: inputValue},
                {headers: {Authorization: `Bearer ${token}`}})
                .then((res) => {
                    console.log(res.data);
                    const {cases, consult_id} = res.data
                    stackNavigation.navigate("SearchResultPage", {consult_content: inputValue, cases, consult_id})
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err)
                    setIsLoading(false);
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
                <CustomButton content={isLoading ? <ActivityIndicator/> : "AI 법률조회"}
                              handlePressButton={handleSearchButtonClick} width={"260px"}
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