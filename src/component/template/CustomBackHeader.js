import React from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from "react-native";
import moreButtonImagePath from "../../img/more.png";
import styled from "styled-components";
import {Entypo} from "@expo/vector-icons";

import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window')

function CustomBackHeader({content, handleBackButtonPress, handleMoreButtonPress}) {
    return (
        <StyledHeader style={{marginTop: Platform.OS ==="ios" ? 0 : 30 }}>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={handleBackButtonPress}>
                    <Entypo name="chevron-left" size={24} color="rgb(71, 67, 72)"/>
                </TouchableOpacity>
                <StyledTitle>{content}</StyledTitle>
            </View>
            <TouchableOpacity onPress={handleMoreButtonPress}>
                <Image
                    style={{height: 30, width: 30}}
                    source={moreButtonImagePath}
                />
            </TouchableOpacity>
        </StyledHeader>
    );
}

export default CustomBackHeader;

const StyledHeader = styled(View)`
  background-color: white;

  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-width: 5px;
`

const StyledTitle = styled(Text)`
  font-family: NanumSquareEB;
  font-size: ${width > 375 ? "20px" : "18px"};
  margin-left: 20px;
  color: black;
`

const styles = {
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
}