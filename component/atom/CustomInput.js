import React, {useState} from 'react';
import {TextInput} from "react-native";
import styled from 'styled-components/native';

function CustomInput({placeholder, width, height}) {
    const [text, onChangeText] = useState("");

    return (
        <StyledTextInput
            placeholder={placeholder}
            // style={styles.input}
            width={width}
            height={height}
            onChangeText={onChangeText}
            value={text}
        />);
}

export default CustomInput;

const StyledTextInput = styled(TextInput)`
  width: ${(props)=>props.width};
  height: ${(props)=>props.height};
  borderWidth: 1px;
  borderColor: rgba(0,0,0,0.2);
  borderRadius: 10px;
  paddingLeft: 26px;
`;
