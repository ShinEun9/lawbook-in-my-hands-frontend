import React from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components"
import moreButtonImagePath from "../../img/more.png";
import {colors} from "../../variable/color";
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window')

function CustomHeader({content, handleMoreButtonPress}) {
    return (
        <StyledHeader style={{marginTop: Platform.OS ==="ios" ? 0 : 30 }}>
            <StyledTitle>{content}</StyledTitle>
            <TouchableOpacity onPress={handleMoreButtonPress}>
                <Image
                    style={{height: 30, width: 30}}
                    source={moreButtonImagePath}
                />
            </TouchableOpacity>
        </StyledHeader>

    );
}

export default CustomHeader;

const StyledHeader = styled(View)`
  //margin-top: Platform.os = ios ? 0px" : "20px";   
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
  border-bottom-color: rgba(0,0,0,0.02);
  border-bottom-width: 5px;
  background-color: white;

`
const StyledTitle = styled(Text)`
  font-size: ${width > 375 ? "20px" : "18px"};
  font-weight: 800;
  // color: ${colors.pointBlue};
  font-family: NanumSquareEB;
`