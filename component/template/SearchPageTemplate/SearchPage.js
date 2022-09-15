import React from 'react';
import {Text, View} from "react-native";
import CustomMultililneInput from "../../atom/CustomMultililneInput";
import CustomInput from "../../atom/CustomInput";
import CustomButton from "../../atom/CustomButton";
import {colors} from "../../../variable/color";

function SearchPage(props) {
    const handleSearchButtonClick = ()=>{

    }
    return (
        <View style={styles.container}>
            <CustomMultililneInput width={"320px"} height={"500px"}/>
            <CustomButton content={"로그인"} handlePressButton={handleLoginButtonClick} width={"260px"} height={"40px"}
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