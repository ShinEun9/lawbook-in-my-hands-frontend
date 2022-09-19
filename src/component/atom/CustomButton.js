import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

function CustomButton({content, handlePressButton, width, height, background}) {
    return (
        <TouchableOpacity onPress={handlePressButton} activeOpacity={0.9}>
            <StyledButton width={width} height={height} background={background}>
                <Text
                    style={styles.buttonText}
                >{content}</Text>
            </StyledButton>
        </TouchableOpacity>

    );
}

export default CustomButton;

const StyledButton = styled(View)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props)=>props.background};
  borderRadius: 10px;
  justifyContent: center;
  alignItems: center;
`;


const styles = {
    buttonText: {
        fontSize: "14px",
        color: "white",
        textAlign: "center"
    }
}