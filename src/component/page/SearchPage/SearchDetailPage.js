import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, ActivityIndicator, Alert} from "react-native";
import styled from "styled-components";
import CustomBackHeader from "../../template/CustomBackHeader";
import {colors} from "../../../variable/color";
import {Entypo, Ionicons} from "@expo/vector-icons";
import CustomIconButton from "../../atom/CustomIconButton";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const parseString = require('react-native-xml2js').parseString;

function SearchDetailPage({navigation: stackNavigation, drawerNavigation, route}) {
    const [isScrap, setIsScrap] = useState(false);
    const [caseData, setCaseData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {url, case_serial_id, consult_id, title} = route.params;
    console.log(case_serial_id, consult_id)

    const fetchData = async () => {
        const token = await asyncStorage.getItem("@access_token");
        await axios.all(
            [
                axios.get(url),
                axios.get(`http://127.0.0.1:5000/scrap/${case_serial_id}?consult_id=${consult_id}`, {headers: {Authorization: `Bearer ${token}`}})
            ]
        )
            .then(
                axios.spread((res1, res2) => {
                    parseString(res1.data, (err, result) => {
                        const response = JSON.parse(JSON.stringify((result))).PrecService;
                        setCaseData(response);
                        setIsLoading(false);
                    })

                    console.log(res2.data.scrap);

                    setIsScrap(res2.data.scrap);
                })
            )
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData();
    }, [url])

    const handleScrapButtonClick = async () => {
        const token = await asyncStorage.getItem("@access_token");

        if (!isScrap) {
            // 스크랩 하기
            await axios.post(`http://127.0.0.1:5000/scrap/${case_serial_id}?consult_id=${consult_id}`, {}, {
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                Alert.alert(
                    "스크랩이 완료되었습니다.",
                    "",
                    [
                        {text: "확인"}
                    ]
                );
                setIsScrap(true);
            }).catch((err) => {
                console.log(err)
            })
        } else {
            // 스크랩 취소
            await axios.delete(`http://127.0.0.1:5000/scrap/${case_serial_id}?consult_id=${consult_id}`, {
                headers: {Authorization: `Bearer ${token}`}
            }).then((res) => {
                Alert.alert(
                    "스크랩 취소가 완료되었습니다.",
                    "",
                    [
                        {text: "확인"}
                    ]
                );
                setIsScrap(false);
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomBackHeader content={title}
                                  handleBackButtonPress={() => {
                                      stackNavigation.pop();
                                  }}
                                  handleMoreButtonPress={() => {
                                      drawerNavigation.toggleDrawer()
                                  }}
                />
            </View>
            <Styled판례Container>
                {
                    isLoading ?
                        <ActivityIndicator/>
                        :
                        <ScrollView style={styles.content}>
                            <View style={{width: "100%", alignItems: "flex-end", marginBottom: 20}}>
                                <CustomIconButton content={"스크랩"}
                                                  icon={
                                                      isScrap ? <Ionicons name="heart" size={20} color="white"/> :
                                                          <Ionicons name="heart-outline" size={20} color="white"/>
                                                  }
                                                  handlePressButton={handleScrapButtonClick} width={"75px"}
                                                  height={"40px"}
                                                  background={colors.pointBlue}/>
                            </View>
                            {
                                caseData && Object.entries(caseData).map((item) => {
                                    return <View style={{marginBottom: 10}} key={item[0]}>
                                        <Text style={styles.caseTitle}>
                                            【{item[0]}】
                                        </Text>
                                        {
                                            item[1].map((text, index) => {
                                                return <Text key={index}
                                                             style={styles.caseContent}>{text.split("\n").join("").replace(/\s{2,}/gi, ' ')}</Text>
                                            })
                                        }
                                    </View>
                                })
                            }
                        </ScrollView>

                }
            </Styled판례Container>
        </SafeAreaView>
    );
}

export default SearchDetailPage;

const Styled판례Container = styled(View)`
  flex: 9;
  width: 100%;
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-width: 5px;
`;

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
        width: "100%",
        padding: 10
        // alignItems: "center"
    },
    caseTitle: {
        fontFamily: "NanumSquareB",
        fontSize: "18px",
        marginBottom: 5
    },
    caseContent: {
        fontFamily: "NanumSquareB",
        fontSize: "16px",
    }

}