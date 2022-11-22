import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components/native";

function CustomIconButton({content, icon, handlePressButton, width, height, background}) {
    return (
        <TouchableOpacity onPress={handlePressButton} activeOpacity={0.9}>
            <StyledButton width={width} height={height} background={background}>
                {icon}
                <Text style={styles.buttonText}>{content}</Text>
            </StyledButton>
        </TouchableOpacity>
    );
}

export default CustomIconButton;

const StyledButton = styled(View)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props)=>props.background};
  borderRadius: 10px;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
`;


const styles = {
    buttonText: {
        fontFamily: "NanumSquareB",
        fontSize: "14px",
        color: "white",
        textAlign: "center"
    }
}