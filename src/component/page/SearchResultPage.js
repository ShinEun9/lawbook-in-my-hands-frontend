import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components"
import {Entypo} from '@expo/vector-icons';
import moreButtonImagePath from "../../img/more.png";


function SearchResultPage({navigation: stackNavigation, drawerNavigation, route}) {
    const {inputValue} = route.params;
    const handlePressButton = () => {
        stackNavigation.navigate('SearchDetailPage');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    width: "100%",
                    height: 50,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 25,
                    backgroundColor: "yellow"

                }}>
                    <Text>hi</Text>
                    {/*<Text style={{*/}
                    {/*    fontSize: "20px",*/}
                    {/*    fontWeight: "800",*/}
                    {/*    marginLeft: 20,*/}
                    {/*    color: "rgb(71, 67, 72)"*/}
                    {/*}}>상담내용 작성</Text>*/}

                    {/*<TouchableOpacity*/}
                    {/*    onPress={() => {*/}
                    {/*        drawerNavigation.toggleDrawer()*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Image*/}
                    {/*        style={{height: 30, width: 30}}*/}
                    {/*        source={moreButtonImagePath}*/}
                    {/*    />*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </View>

            <Text style={styles.title}>
                <Text style={styles.userName}>홍길동 고객님</Text>의 사례와
                {"\n"}가장 비슷한 판례문을 찾아보았어요.
            </Text>
            <Text style={styles.subTitle}>검색결과: '{inputValue.length > 10 ? `${inputValue.slice(0, 10)}...` : inputValue}'와
                관련된 판례 18개</Text>

            <View style={styles.resultBox}>
                <StyledButton activeOpacity={0.7} onPress={handlePressButton}>
                    <Text style={styles.buttonTitle}>대법원 2021. 3. 25. 선고 2017도17643 판결 [모욕][공2021상,943]</Text>
                    <Entypo name="chevron-right" size={24} color="rgba(0,0,0,0.3)"/>
                </StyledButton>
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
        height: 400,
        backgroundColor: "#F8F4F4",
        paddingHorizontal: 36,
        paddingVertical: 26,
        alignItems: "center",
    },
    buttonTitle: {
        width: "85%",
        fontSize: "13px",
        fontWeight: "400"
    }
}
