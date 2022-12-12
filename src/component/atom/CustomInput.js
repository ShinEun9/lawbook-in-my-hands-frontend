import React, {useState} from 'react';
import {Text, TextInput, View} from "react-native";
import styled from 'styled-components/native';
import {colors} from "../../variable/color";

function CustomInput({placeholder, width, height, value, onChange, name, type = false}) {
    const [isFocus, setIsFocus] = useState(false);
    const [showRequiredMessage, setShowRequiredMessage] = useState(true);
    return (
        <View>
            <StyledTextInput
                secureTextEntry={type === "password" ? true : false}
                placeholder={placeholder}
                width={width}
                height={height}
                onChangeText={(text) => {
                    onChange(name, text)
                }}
                onEndEditing={({ nativeEvent: { text }}) => {
                    setIsFocus(false)
                    if (text === "") setShowRequiredMessage(false); else setShowRequiredMessage(true);
                }}
                value={value}
                autoCapitalize={"none"}
                focus={isFocus}
                onFocus={() => {
                    setIsFocus(true)
                }}
            />
            {/*{!showRequiredMessage ? <Text>야 안썼어 너</Text> : null}*/}
        </View>
    );
}

export default CustomInput;

const StyledTextInput = styled(TextInput)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  borderBottomWidth: 1px;
  borderColor: ${(props) => props.focus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"};
  paddingLeft: 26px;
    // margin-bottom: ${(props) => props.margin}px;
  // borderRadius: 10px;
`;
