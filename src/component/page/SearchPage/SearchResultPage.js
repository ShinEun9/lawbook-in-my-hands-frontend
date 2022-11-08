import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components"
import {Entypo} from '@expo/vector-icons';
import CustomBackHeader from "../../template/CustomBackHeader";


function SearchResultPage({navigation: stackNavigation, drawerNavigation, route}) {
    const {consult_content, consult_id, cases} = route.params;

    const handlePress판례Button = (url, case_serial_id, title) => {
        const titleTmp  = `${title.slice(0,20)}...`
        if (route.name === "SearchResultPage") {
            stackNavigation.navigate('SearchDetailPage', {url, case_serial_id, consult_id, title: titleTmp});
        } else if(route.name === "ScrapSearchResultPage") {
            stackNavigation.navigate("ScrapDetailPage", {url, case_serial_id, consult_id, title: titleTmp});
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomBackHeader content={"상담 결과"}
                                  handleBackButtonPress={() => {
                                      if(route.name==="SearchResultPage"){
                                          stackNavigation.navigate("SearchWritePage");
                                      }
                                      else if(route.name==="ScrapSearchResultPage"){
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
                    <Text style={styles.userName}>홍길동 고객님</Text>의 사례와
                    {"\n"}가장 비슷한 판례문을 찾아보았어요.
                </Text>
                {
                    consult_content &&
                    <Text style={styles.subTitle}>
                        검색결과: '{consult_content.length > 10 ? `${consult_content.slice(0, 10)}...` : consult_content}'와 관련된
                        판례 {cases.length}개
                    </Text>
                }

                {
                    !cases.length ?
                        <View>
                            <Text>검색결과가 없습니다.</Text>
                        </View>
                        :
                        cases.map((item, index) => {
                            const url = item.url
                            delete item.url;
                            const title =  Object.values(item).join(' ').length > 70 ?
                                `${Object.values(item).join(' ').slice(0, 60)}...`
                                : Object.values(item).join(' ');

                            return <View style={styles.resultBox} key={index}>
                                <StyledButton activeOpacity={0.7} onPress={() => {
                                    handlePress판례Button(url, item.case_serial_id, title)
                                }}>
                                    <Text style={styles.buttonTitle}>
                                        {
                                          title
                                        }
                                    </Text>
                                    <Entypo name="chevron-right" size={24} color="rgba(0,0,0,0.3)"/>
                                </StyledButton>
                            </View>
                        })
                }
            </View>
        </SafeAreaView>
    );
}

export default SearchResultPage;

const StyledButton = styled(TouchableOpacity)`
  background-color: white;
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
    }, content: {
        flex: 9,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        width: 360,
        fontSize: 20,
        fontWeight: "400",
        marginTop: 24,
        marginBottom: 50
    },
    userName: {
        fontWeight: "800"
    },
    subTitle: {
        color: "#A2A2A2",
        fontSize: 15,
        marginBottom: 10,
    },
    resultBox: {
        width: "100%",
        backgroundColor: "#F8F4F4",
        paddingHorizontal: 36,
        paddingVertical: 26,
        alignItems: "center",
    },
    buttonTitle: {
        width: "95%",
        fontSize: "13px",
        fontWeight: "400"
    }
}
