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
    const example = "방송사가 술에 취해 길에 쓰러졌던 40대 남자가 정신병원에 4년간이나 강제수용된 사실을 보도하면서, 정신보건법령상 제도의 운영상 문제점을 부각시키기 위하여 사실관계를 단순화시켜 그 일부 측면만을 강조하는 과정에서 취재된 정신병원의 사정을 방송 내용에 포함시키지 않았다 하더라도, 전체적인 맥락에서 방송 내용의 중요 부분이 진실에 합치함을 이유로 정정보도청구의 요건을 갖추지 못하였다고 한 사례"
    const [inputValue, onChange] = useInput(!route.params ? example : route.params.routeParams);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchButtonClick = async () => {
        setIsLoading(true)
        if (inputValue !== "") {
            const token = await asyncStorage.getItem("@access_token");
            await axios.post(`http://127.0.0.1:5000/consult`, {content: inputValue}, {headers: {Authorization: `Bearer ${token}`}})
                .then((res) => {
                    console.log(res.data);
                    const {cases, consult_id} = res.data
                    stackNavigation.navigate("SearchResultPage", {inputValue, cases, consult_id})
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