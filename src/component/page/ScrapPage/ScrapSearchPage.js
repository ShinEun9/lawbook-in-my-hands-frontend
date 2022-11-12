import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, View} from "react-native";
import CustomMultilineInput from "../../atom/CustomMultilineInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";
import CustomBackHeader from "../../template/CustomBackHeader";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

function ScrapSearchPage({navigation: stackNavigation, drawerNavigation, route}) {
    const {consult_content, consult_id: consult_id_params} = route.params;
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchButtonClick = async () => {
        setIsLoading(true);
        const token = await asyncStorage.getItem("@access_token");
        await axios.get(`http://127.0.0.1:5000/consult/${consult_id_params}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then((res) => {
                setIsLoading(false);
                const {cases, consult_id} = res.data
                stackNavigation.navigate("ScrapSearchResultPage", {consult_content, cases, consult_id})
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err)
            })
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
                    <CustomMultilineInput
                        value={consult_content}
                        // onChange={onChange}
                        editable={false}/>
                </View>
                <CustomButton content={isLoading ? <ActivityIndicator/> : "AI 법률조회"}
                              handlePressButton={handleSearchButtonClick} width={"260px"}
                              height={"50px"}
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