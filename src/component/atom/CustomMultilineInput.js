import React, {useState} from 'react';
import {TextInput} from "react-native";
import styled from "styled-components/native";
import {colors} from "../../variable/color";

function CustomMultilineInput({value, onChange, editable = true}) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <StyledTextInput // margin={margin}
            width={"360px"} height={"360px"}
            placeholder={"구체적으로 적어주세요."}
            multiline={true}
            numberOfLines={5}
            onChangeText={onChange}
            value={value}
            editable={editable}
            focus={isFocus}
            onFocus={() => {
                setIsFocus(true)
            }}
            onBlur={() => {
                setIsFocus(false)
            }}
        />
    );
}

export default CustomMultilineInput;

const StyledTextInput = styled(TextInput)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.editable ? "white" : "#ebeae4"};
    // margin-bottom:  ${(props) => parseInt(props.margin)}px;
  borderWidth: 1px;
  borderColor: ${(props) => props.focus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"};
  borderRadius: 10px;
  padding: 20px;
`;