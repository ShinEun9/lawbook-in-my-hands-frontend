import React, {useState} from 'react';
import {ActivityIndicator, Alert, SafeAreaView, View} from "react-native";
import CustomMultilineInput from "../../atom/CustomMultilineInput";
import {colors} from "../../../variable/color";
import {useInput} from "../../../hooks/useInput";
import CustomHeader from "../../template/CustomHeader";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import CustomButton from "../../atom/CustomButton";


function SearchWritePage({navigation: stackNavigation, drawerNavigation, route}) {
    let example;
    example = "제가 교통사고를 냈습니다. 차에서 내렸는데 교통사고 피해자가 흥분해서 저를 때리려고 했습니다. 죄송하다고 사과했지만 저를 폭행하고 위협을 가했습니다. 경찰에 신고하려고 하니 제 왼쪽 가슴을 구타했습니다. 어쩔 수 없이 차를 타고 사고현장을 벗어나야 했습니다. 상대방은 교통사고를 내고 도주한 혐의로 저를 고소했습니다. 이런 경우 어떻게 해야하나요?"
    //  example = "성추행 허위 사실에 대한 명예훼손이 성립하는지 궁금합니다.\n" +
    //     "직장동료인 A와 B 사이 술자리에서 상호 간 합의하에 포옹의 터치가 있었던 사실을 계기로,\n" +
    //     "B가 관리자인 A를 향해 불합리한 업무 사항을 제시하였고,\n" +
    //     "이를 해결해 주지 않는다면, 성추행으로 고소를 할 것이라는 고지와 함께,\n" +
    //     "동료 직원 모두뿐 아니라, 타 부서의 무작위한 직원들에게 성추행을 당했다는 허위 사실을 실제로 유포하였고,\n" +
    //     "본 부서의 일원인 의뢰인 본인과 임직원 모두가 정신적 피해를 입었으며,\n" +
    //     "사 측의 이미지 실추 및 제2차, 3차 분쟁을 초래하였으므로 이를 해결하기 위한 법률 상담을 정식으로 요청드립니다."

    //  example = "무인모텔을 운영하고 있는 중년남성입니다. 근데 얼마 전 모텔에서 몰래카메라가 있다는 얘기가 들어와서 경찰분들과 함께 제보 받은 그 방에 갔습니다. 경찰분들이 탐지기로 확인 해봐주시더니 몰래카메라가 나왔고, 누가 설치했는지도 모르는 상황입니다. 그 방에 묵었던 손님과 경찰관분들은 저를 의심선상에 올려놨는데 전 정말로 그런짓 하지 않았습니다. 무인모텔이다 보니 방 제외하고 cctv가 다 설치되어있어서 증거자료로 전달드렸어요. 그치만 저도 조사를 받아야 하는 상황인데... 만약 범인을 못 찾게 되면 어떻게 되는건가요? 제가 대신 벌 받게 되나요? 관리미숙 뭐 그런걸로 처벌되는 경우도 있나요?\n"
    //  example = ""
    const [inputValue, onChange] = useInput(!route.params ? example : route.params.routeParams);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchButtonClick = async () => {
        setIsLoading(true)
        if (inputValue !== "") {
            const token = await asyncStorage.getItem("@access_token");
            await axios.post(`http://3.39.59.151:5000/consult`, {content: inputValue},
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
            setIsLoading(false);
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
                    <CustomMultilineInput value={inputValue} onChange={onChange}/>
                </View>
                <CustomButton handlePressButton={handleSearchButtonClick} width={"260px"}
                              height={"50px"}
                              pointColor={colors.pointBlue} borderRadius={"5px"}>
                    {isLoading ? <ActivityIndicator/> : "AI 법률조회"}
                </CustomButton>
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