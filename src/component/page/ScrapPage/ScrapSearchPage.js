import React from 'react';
import {SafeAreaView, View} from "react-native";
import CustomHeader from "../../template/CustomHeader";
import CustomMultililneInput from "../../atom/CustomMultililneInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";
import CustomBackHeader from "../../template/CustomBackHeader";
import {useInput} from "../../../hooks/useInput";

function ScrapSearchPage({navigation: stackNavigation, drawerNavigation, route}) {
    const [inputValue, onChange] = useInput(!route.params ? "" : route.params.inputValue);

    const handleSearchButtonClick = () => {
        stackNavigation.navigate("ScrapSearchResultPage", {inputValue: inputValue})
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomBackHeader content={"상담내용 작성"}
                                  handleMoreButtonPress={() => {
                                      drawerNavigation.toggleDrawer()
                                  }}
                                  handleBackButtonPress={() => {
                                      stackNavigation.pop();
                                  }}

                />
            </View>

            <View style={styles.content}>
                <View style={{marginBottom: 30}}>
                    <CustomMultililneInput value={inputValue} onChange={onChange} editable={false}/>
                </View>
                <CustomButton content={"AI 법률조회"} handlePressButton={handleSearchButtonClick} width={"260px"}
                              height={"40px"}
                              background={colors.pointBlue}/>
            </View>
        </SafeAreaView>
    );
}

export default ScrapSearchPage;

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