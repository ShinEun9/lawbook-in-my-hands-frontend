import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator, ScrollView, RefreshControl} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import styled from "styled-components"
import {Entypo} from "@expo/vector-icons";
import {colors} from "../../../variable/color";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

function ScrapListPage({navigation: stackNavigation, drawerNavigation}) {
    const [consultList, setConsultList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // ScrollView Refresh Control 관련
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => fetch스크랩리스트Data().then(() => setRefreshing(false)));
    }, []);

    const fetch스크랩리스트Data = async () => {
        const token = await asyncStorage.getItem("@access_token");
        await axios.get(`http://127.0.0.1:5000/scrap`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then((res) => {
            setConsultList(res.data.consult_list);
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleTitlePress = (consult_content, consult_id) => {
        // console.log(consult_content, consult_id)
        stackNavigation.navigate("ScrapSearchPage", {consult_content, consult_id})
    }

    const handle스크랩판례ButtonPress = (상담내역, oneCase, title) => {
        const {consult_id} = 상담내역;
        const {url, case_serial_id} = oneCase
        stackNavigation.navigate("ScrapDetailPage", {
            url,
            case_serial_id,
            consult_id,
            title: `${title.slice(0, 15)}...`
        })
    }

    useEffect(() => {
        fetch스크랩리스트Data().then(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomHeader content={"나의 스크랩"}
                              handleMoreButtonPress={() => {
                                  drawerNavigation.toggleDrawer()
                              }}
                />
            </View>
            <View style={styles.content}>
                <ScrollView style={styles.scrollView} contentContainerStyle={{alignItems: "center"}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                >
                    {
                        isLoading ?
                            <ActivityIndicator/>
                            :
                            consultList.length !== 0 ?
                                consultList.map((상담내역, index) => {
                                    const {
                                        consult_content: title,
                                        scrap_list: scrapList,
                                        consult_id,
                                        created_at
                                    } = 상담내역;
                                    return <StyledScrapContainer key={index}>
                                        <View style={styles.containerTitle}>
                                            <TouchableOpacity onPress={() => {
                                                handleTitlePress(title, consult_id)
                                            }}>
                                                <Text style={styles.titleButtonText}>{created_at.slice(2, 16)}</Text>
                                                <Text style={styles.titleButtonText}>{title.slice(0, 10)}...글 관련
                                                    스크랩 {scrapList.length}개</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.containerContent}>
                                            {
                                                !scrapList.length ?
                                                    <Text style={styles.noScrapContent}>스크랩된 판례가 없습니다.</Text>
                                                    :
                                                    scrapList.map((oneCase) => {
                                                        const {
                                                            case_serial_id, 법원명, 사건명, 사건번호, 선고, 선고일자, 판결유형
                                                        } = oneCase
                                                        const title = `${법원명} ${사건명} ${사건번호} ${선고} ${선고일자} ${판결유형}`

                                                        return <TouchableOpacity key={case_serial_id}
                                                                                 style={styles.스크랩판례Button}
                                                                                 onPress={() => {
                                                                                     handle스크랩판례ButtonPress(상담내역, oneCase, title)
                                                                                 }}>
                                                            <Text style={styles.buttonText}>
                                                                {title.slice(0, 40)}...
                                                            </Text>
                                                            <Entypo name="chevron-right" size={24}
                                                                    color="rgba(0,0,0,0.3)"/>
                                                        </TouchableOpacity>
                                                    })
                                            }
                                        </View>
                                    </StyledScrapContainer>
                                })

                                :
                                <Text>상담내역이 없습니다. AI판례추천서비스를 이용해보세요</Text>
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
        ;
}

export default ScrapListPage;

const StyledScrapContainer = styled(View)`
  width: 90%;
  height: auto;
  margin-bottom: 20px;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0.5px;
  border-radius: 20px;
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
        flex: 9,
        width: "100%",
        alignItems: "center",
    },
    scrollView: {
        flex: 9,
        width: "100%"
    },
    containerTitle: {
        backgroundColor: "rgba(233,235,239, 0.8)",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    titleButtonText: {
        fontSize: "16px",
        fontWeight: "700",
        color: `${colors.pointBlue2}`
    },
    containerContent: {},
    스크랩판례Button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "rgb(241,241,241)",
        borderBottomWidth: "0.5px",
    },
    buttonText: {
        width: "85%",
    },

    noScrapContent: {
        width: "100%",
        padding: 20,
        color: `${colors.darkgrey}`
    }
}