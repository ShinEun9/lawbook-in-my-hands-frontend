import React, {useEffect, useState} from 'react';
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    Platform, Alert
} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import styled from "styled-components"
import {AntDesign, Entypo} from "@expo/vector-icons";
import {colors} from "../../../variable/color";

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
        await axios.get(`http://3.39.59.151:5000/scrap`, {
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
        const titleTmp = `${title.slice(0, 15)}...`
        const {consult_id} = 상담내역;
        const {url, case_serial_id} = oneCase
        stackNavigation.navigate("ScrapDetailPage", {
            url,
            case_serial_id,
            consult_id,
            title: titleTmp
        })
    }

    const handle내역DeleteButton = async (consult_id) => {
        Alert.alert(
            "상담내역을 삭제하시겠습니까?",
            "삭제 시 스크랩한 판례도 모두 삭제됩니다.",
            [
                {
                    text: "확인", onPress: async () => {
                        const token = await asyncStorage.getItem("@access_token");
                        await axios.delete(`http://3.39.59.151:5000/consult/${consult_id}`, {
                            headers: {Authorization: `Bearer ${token}`}
                        }).then((res) => {
                            console.log(res.data);
                            fetch스크랩리스트Data();
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                },
                {
                    text: "취소"
                }
            ]
        );
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
            <View style={{...styles.content, paddingTop: Platform.OS === "ios" ? 0 : 40}}>
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

                                    return <View style={{width: "100%", alignItems: "center",}} key={index}>
                                        <View style={styles.timeTextContainer}>
                                            <Text style={styles.timeText}>{created_at.slice(2, 16)}</Text>
                                            <TouchableOpacity onPress={() => {
                                                handle내역DeleteButton(consult_id)
                                            }}>
                                                <AntDesign name={"delete"} color={colors.gold} size={20}/>
                                            </TouchableOpacity>
                                        </View>
                                        <StyledScrapContainer>
                                            <View style={styles.containerTitle}>
                                                <TouchableOpacity onPress={() => {
                                                    handleTitlePress(title, consult_id)
                                                }}>
                                                    <Text style={styles.titleButtonText}>{title.slice(0, 10)}...글 관련
                                                        스크랩 {scrapList.length}개</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.containerContent}>
                                                {
                                                    !scrapList.length ?
                                                        <Text style={styles.noScrapContent}>스크랩된 판례가
                                                            없습니다.</Text>
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
                                    </View>

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
  margin-bottom: 24px;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0.5px;
  border-radius: 10px;
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
    timeTextContainer: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifySelf: "flex-start",
        marginBottom: 8
    },
    timeText: {
        marginRight: 15,
        fontSize: 16,
        color: `${colors.gold}`,
        fontFamily: "NanumSquareEB",
    },
    containerTitle: {
        backgroundColor: "rgba(233,235,239, 0.8)",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 10,
    },
    titleButtonText: {
        fontFamily: "NanumSquareEB",
        fontSize: 16,
        color: `${colors.pointBlue}`
    },
    containerContent: {},
    스크랩판례Button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "rgb(241,241,241)",
        borderBottomWidth: 0.5,
    },
    buttonText: {
        fontFamily: "NanumSquareB",
        fontSize: 13,
        width: "85%",
    },

    noScrapContent: {
        fontFamily: "NanumSquareB",
        fontSize: 13,
        width: "100%",
        padding: 20,
        color: "grey"
    }
}