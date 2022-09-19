import React, {useState} from 'react';
import {TextInput} from "react-native";
import styled from "styled-components/native";

function CustomMultililneInput({value, onChange}) {

    return (
        <StyledTextInput // margin={margin}
            width={"360px"} height={"360px"}
            placeholder={"구체적으로 적어주세요."}
            multiline={true}
            numberOfLines={5}
            onChangeText={onChange}
            value={value}
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