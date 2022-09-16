import React from 'react';
import {View} from "react-native";
import CustomMultililneInput from "../atom/CustomMultililneInput";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";
import {useInput} from "../hooks/useInput";

function SearchWritePage({navigation}) {
    const [inputValue, onChange] = useInput('');
    const handleSearchButtonClick = () => {
        navigation.navigate("SearchResultPage", {inputValue: inputValue})
    }

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 30}}>
                <CustomMultililneInput value={inputValue} onChange={onChange}/>
            </View>
            <CustomButton content={"AI 법률조회"} handlePressButton={handleSearchButtonClick} width={"260px"}
                          height={"40px"}
                          background={colors.pointBlue}/>
        </View>
    );
}

export default SearchWritePage;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}