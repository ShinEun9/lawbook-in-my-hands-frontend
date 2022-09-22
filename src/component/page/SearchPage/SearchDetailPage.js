import React, {useState} from 'react';
import {View, Text, SafeAreaView} from "react-native";
import styled from "styled-components";
import CustomBackHeader from "../../template/CustomBackHeader";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";
import {Entypo, Ionicons} from "@expo/vector-icons";
import CustomIconButton from "../../atom/CustomIconButton";

function SearchDetailPage({navigation: stackNavigation, drawerNavigation, route}) {
    const [isScrap, setIsScrap] = useState(false);

    const handleScrapButtonClick = () => {
        setIsScrap((prev)=>!prev);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomBackHeader content={"대법원 2021.3.25. 선고 2017도..."}
                                  handleBackButtonPress={() => {
                                      stackNavigation.pop();
                                  }}
                                  handleMoreButtonPress={() => {
                                      drawerNavigation.toggleDrawer()
                                  }}
                />
            </View>
            <View style={styles.content}>
                <Styled판례Container>
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
                    <Text>
                        【판시사항】
                        [1] 모욕죄에서 말하는 ‘모욕’의 의미 / 어떤 글이 모욕적 표현을 담고 있더라도 사회상규에 위배되지 않는 행위로서 위법성이 조각될 수 있는 경우 / 특정 사안에 대한
                        의견을 공유하는 인터넷 게시판 등의 공간에서 작성된 단문의 글에 모욕적 표현이 포함되어 있더라도 그 글을 작성한 행위가 사회상규에 위배되지 않는 행위로서 위법성이 조각되는
                        경우
                        [2] 인터넷 신문사 소속 기자 甲이 작성한 기사가 인터넷 포털 사이트의 ‘핫이슈’ 난에 게재되자, 피고인이 “이런걸 기레기라고 하죠?”라는 댓글을 게시함으로써 공연히 甲을
                        모욕하였다는 내용으로 기소된 사안에서, ‘기레기’는 모욕적 표현에 해당하나, 위 댓글의 내용, 작성 시기와 위치, 위 댓글 전후로 게시된 다른 댓글의 내용과 흐름 등을
                        종합하면, 위 댓글을 작성한 행위는 사회상규에 위배되지 않는 행위로서 형법 제20조에 의하여 위법성이 조각된다고 한 사례
                    </Text>
                </Styled판례Container>
            </View>
        </SafeAreaView>
        // <StyledResultContainer>
        //     <CustomButton content={"스크랩"} handlePressButton={handleScrapButtonClick} width={"75px"} height={"30px"}
        //                   background={colors.pointBlue}/>
        //     <Text>
        //
        //     </Text>
        // </StyledResultContainer>
    );
}

export default SearchDetailPage;

const Styled판례Container = styled(View)`
  width: 100%;
  padding: 10px;
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
        // backgroundColor: "orange",
    },
    content: {
        flex: 9,
        width: "100%",
        alignItems: "center"
    },

}