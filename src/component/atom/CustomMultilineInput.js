import React, {useState} from 'react';
import {Keyboard, TextInput, TouchableWithoutFeedback} from "react-native";
import styled from "styled-components/native";
import {colors} from "../../variable/color";

function CustomMultilineInput({value, onChange, editable = true}) {
    const [isFocus, setIsFocus] = useState(false);
    return (

        <StyledTextInput // margin={margin}
            height={"360px"}
            placeholder={"구체적으로 적어주세요."}
            multiline={true}
            textAlignVertical={"top"}
            numberOfLines={5}
            onChangeText={onChange}
            value={value}
            editable={editable}
            focus={isFocus}
            blurOnSubmit={true}
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

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

const StyledTextInput = styled(TextInput)`
  width: ${width * 0.9}px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.editable ? "white" : "#ebeae4"};
    // margin-bottom:  ${(props) => parseInt(props.margin)}px;
  borderWidth: 1px;
  borderColor: ${(props) => props.focus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"};
  borderRadius: 5px;
  padding: 20px;
  font-family: NanumSquareR;
  font-size: 14px;
`;