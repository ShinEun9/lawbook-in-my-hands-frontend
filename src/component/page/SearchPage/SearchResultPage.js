import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components"
import {Entypo} from '@expo/vector-icons';
import CustomBackHeader from "../../template/CustomBackHeader";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";


function SearchResultPage({navigation: stackNavigation, drawerNavigation, route}) {
    const {consult_content, consult_id, cases} = route.params;
    const [userName, setUserName] = useState(null);

    const handlePress판례Button = (url, case_serial_id, title) => {
        const titleTmp = `${title.slice(0, 15)}...`
        if (route.name === "SearchResultPage") {
            stackNavigation.navigate('SearchDetailPage', {url, case_serial_id, consult_id, title: titleTmp});
        } else if (route.name === "ScrapSearchResultPage") {
            stackNavigation.navigate("ScrapDetailPage", {url, case_serial_id, consult_id, title: titleTmp});
        }
    }

    const fetchUserName = async () => {
        const userName = await asyncStorage.getItem("@name");
        setUserName(userName);
    }
    useEffect(() => {
        fetchUserName();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomBackHeader content={"상담 결과"}
                                  handleBackButtonPress={() => {
                                      if (route.name === "SearchResultPage") {
                                          stackNavigation.navigate("SearchWritePage");
                                      } else if (route.name === "ScrapSearchResultPage") {
                                          stackNavigation.navigate("ScrapSearchPage", {consult_content, consult_id});
                                      }
                                  }}
                                  handleMoreButtonPress={() => {
                                      drawerNavigation.toggleDrawer()
                                  }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    <Text style={styles.userName}>{userName} 고객님</Text>의 사례와
                    {"\n"}가장 비슷한 판례문을 찾아보았어요.
                </Text>
                {
                    consult_content &&
                    <Text style={styles.subTitle}>
                        검색결과: '{consult_content.length > 10 ? `${consult_content.slice(0, 10)}...` : consult_content}'와
                        관련된
                        판례 {cases.length}개
                    </Text>
                }

                {
                    !cases.length ?
                        <View>
                            <Text style={{fontFamily: "NanumSquareB"}}>검색결과가 없습니다.</Text>
                        </View>
                        :
                        <ScrollView contentContainerStyle={styles.resultBox}>
                            {
                                cases.map((item, index) => {
                                    const copy = JSON.parse(JSON.stringify(item));
                                    delete copy.url
                                    const title = Object.values(copy).join(' ').length > 70 ?
                                        `${Object.values(copy).join(' ').slice(0, 60)}...`
                                        : Object.values(copy).join(' ');

                                    return <StyledButton key={index} activeOpacity={0.7} onPress={() => {
                                        handlePress판례Button(item.url, item.case_serial_id, title)
                                    }}>
                                        <Text style={styles.buttonTitle}>
                                            {title}
                                        </Text>
                                        <Entypo name="chevron-right" size={24} color="rgba(0,0,0,0.3)"/>
                                    </StyledButton>
                                })
                            }
                        </ScrollView>

                }
            </View>
        </SafeAreaView>
    );
}

export default SearchResultPage;

const StyledButton = styled(TouchableOpacity)`
  background-color: white;
  margin-bottom: 20px;
  width: 100%;
  height: 73px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  paddingHorizontal: 21px;
  paddingVertical: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        width: 360,
        fontFamily: "NanumSquareB",
        fontSize: 20,
        marginTop: 24,
        marginBottom: 50
    },
    userName: {
        fontFamily: "NanumSquareEB",
    },
    subTitle: {
        fontFamily: "NanumSquareB",
        fontSize: 15,
        color: "#A2A2A2",
        marginBottom: 10,
    },
    resultBox: {
        width: Dimensions.get('window').width,
        backgroundColor: "#F8F4F4",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 26,
    },
    buttonTitle: {
        width: "90%",
        fontFamily: "NanumSquareR",
        fontSize: 12,
    }
}
