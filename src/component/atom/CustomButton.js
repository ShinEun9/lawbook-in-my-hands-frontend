import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

// type이 a 것은 버튼 색깔 있는 것, b인 것은 버튼 색깔 흰색에 테두리
function CustomButton({type = "a", children, handlePressButton, width, height, pointColor, borderRadius}) {
    return (
        <TouchableOpacity onPress={handlePressButton} activeOpacity={0.9}>
            <StyledButton type={type} width={width} height={height} pointColor={pointColor} borderRadius={borderRadius}>
                <StyledButtonText type={type} pointColor={pointColor}>{children}</StyledButtonText>
            </StyledButton>
        </TouchableOpacity>

    );
}

export default CustomButton;

const StyledButton = styled(View)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.type === "a" ? props.pointColor : "white"};
  borderRadius: ${(props) => props.borderRadius};
  border-width: 1px;
  border-color: ${(props) => props.pointColor};
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
`;

const StyledButtonText = styled(Text)`
  fontSize: 14px;
  color: ${(props) => props.type === "b" ? `${props.pointColor}` : "white"};
  textAlign: center;
  font-family: NanumSquareB;
`;
