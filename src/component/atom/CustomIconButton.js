import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";
import {colors} from "../../variable/color";

function CustomIconButton({type = "a", content, icon, handlePressButton}) {
    return (
        <TouchableOpacity onPress={handlePressButton} activeOpacity={0.9}>
            <StyledButton type={type}>
                {icon}
                <StyledText type={type}>{content}</StyledText>
            </StyledButton>
        </TouchableOpacity>
    );
}

export default CustomIconButton;

const StyledButton = styled(View)`
  width: 75px;
  height: 45px;
  background: ${(props) => props.type === "a" ? `${colors.pointBlue}` : "white"};
  border-width: 1px;
  border-color: ${colors.pointBlue};
  borderRadius: 50;
  padding-horizontal: 10;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
`;

const StyledText = styled(Text)`
  fontFamily: NanumSquareB;
  fontSize: 14;
  color: ${(props) => props.type === "a" ? "white" : `${colors.pointBlue}`}
  textAlign: center;
`;