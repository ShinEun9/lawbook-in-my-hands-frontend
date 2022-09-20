import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import moreButtonImagePath from "../../img/more.png";
import styled from "styled-components";
import {Entypo} from "@expo/vector-icons";

function CustomBackHeader({content, handlePressBackButton, handlePressMoreButton}) {
    return (
        <StyledHeader>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={handlePressBackButton}>
                    <Entypo name="chevron-left" size={24} color="rgb(71, 67, 72)"/>
                </TouchableOpacity>
                <StyledTitle>{content}</StyledTitle>
            </View>
            <TouchableOpacity onPress={handlePressMoreButton}>
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
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-width: 5px;
  //background-color: pink;
`

const StyledTitle = styled(Text)`
  font-size: 20px;
  margin-left: 20px;
  font-weight: 800;
  color: rgb(71, 67, 72);
`

const styles = {
    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
}