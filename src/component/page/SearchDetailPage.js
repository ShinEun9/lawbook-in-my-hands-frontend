import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import styled from "styled-components";
import CustomButton from "../atom/CustomButton";
import {colors} from "../../variable/color";

function SearchDetailPage(props) {
    const handleScrapButtonClick=()=>{

    }
    return (
           <StyledResultContainer>
               <CustomButton content={"스크랩"} handlePressButton={handleScrapButtonClick} width={"75px"} height={"30px"}
                             background={colors.pointBlue}/>
               <Text>

               </Text>
           </StyledResultContainer>
    );
}

export default SearchDetailPage;

const StyledResultContainer = styled(SafeAreaView)`
  
`;