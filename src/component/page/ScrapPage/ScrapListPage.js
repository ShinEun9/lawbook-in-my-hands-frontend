import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import styled from "styled-components"
import {Entypo} from "@expo/vector-icons";
import {colors} from "../../../variable/color";

function ScrapListPage({navigation: stackNavigation, drawerNavigation}) {
    const handleTitlePress = () => {
        stackNavigation.navigate("ScrapSearchPage", {inputValue: "제가 며칠전에 어쩌고 저쩌고"})
    }

    const handle스크랩판례ButtonPress = () => {
        stackNavigation.navigate("ScrapDetailPage")
    }

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

                <StyledScrapContainer>
                    <View style={styles.containerTitle}>
                        <TouchableOpacity onPress={handleTitlePress}>
                            <Text style={styles.titleButtonText}>제가 며칠전에... 글 관련 스크랩 3개</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerContent}>
                        <TouchableOpacity style={styles.스크랩판례Button} onPress={handle스크랩판례ButtonPress}>
                            <Text style={styles.buttonText}>대법원 2021. 3. 25. 선고 2017도17643 판결 [모욕][공2021상,943]</Text>
                            <Entypo name="chevron-right" size={24} color="rgba(0,0,0,0.3)"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.스크랩판례Button} onPress={handle스크랩판례ButtonPress}>
                            <Text style={styles.buttonText}>대법원 2021. 3. 25. 선고 2017도17643 판결 [모욕][공2021상,943]</Text>
                            <Entypo name="chevron-right" size={24} color="rgba(0,0,0,0.3)"/>
                        </TouchableOpacity>
                    </View>
                </StyledScrapContainer>

                <StyledScrapContainer>
                    <View style={styles.containerTitle}>
                        <TouchableOpacity onPress={handleTitlePress}>
                            <Text style={styles.titleButtonText}>제가 며칠전에... 글 관련 스크랩 3개</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerContent}>
                        <Text style={styles.noScrapContent}>스크랩된 판례가 없습니다.</Text>
                    </View>
                </StyledScrapContainer>

            </View>
        </SafeAreaView>
    );
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
