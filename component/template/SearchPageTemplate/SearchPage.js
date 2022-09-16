import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import CustomMultililneInput from "../../atom/CustomMultililneInput";
import CustomInput from "../../atom/CustomInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";

function SearchPage({navigation}) {
    const handleSearchButtonClick = ()=>{

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}}>
                <Text>드로어 열기</Text>
            </TouchableOpacity>
            <CustomMultililneInput width={"320px"} height={"500px"} />
            <CustomButton content={"AI 법률조회"} handlePressButton={handleSearchButtonClick} width={"260px"} height={"40px"}
                          background={colors.pointBlue}/>
        </View>
    );
}

export default SearchPage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}