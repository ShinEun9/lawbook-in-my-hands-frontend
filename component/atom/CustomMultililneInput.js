import React, {useState} from 'react';
import {TextInput} from "react-native";
import styled from "styled-components/native";

function CustomMultililneInput({width, height}) {
    const [text, onChangeText] = useState("");

    return (
        <StyledTextInput width={width}
                         height={height}
                         // margin={margin}
                         multiline={true}
                         numberOfLines={5}
                         onChangeText={onChangeText}
                         value={text}
        />
    );
}

export default CustomMultililneInput;

const StyledTextInput = styled(TextInput)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // margin-bottom:  ${(props) => parseInt(props.margin)}px;
  borderWidth: 1px;
  borderColor: rgba(0, 0, 0, 0.2);
  borderRadius: 10px;
  padding: 20px;
`;