import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from "react-native";
import styled from 'styled-components/native';
import {colors} from "../../variable/color";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Ionicons} from "@expo/vector-icons";

function CustomInput({placeholder, width, height, value, onChange, name, iconName}) {
    const [isFocus, setIsFocus] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(true);
    const handleShowPasswordButtonPress = () => {
        // console.log("hihi")
        setIsPasswordShow((prev) => !prev)
    }
    return (
        <StyledTextInput width={width} height={height} focus={isFocus}>
            <AntDesign name={iconName} size={20} color={isFocus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"}
                       style={{marginRight: 20}}/>
            <TextInput
                secureTextEntry={name === "password" ? isPasswordShow : false}
                value={value}
                placeholder={placeholder}
                onChangeText={(text) => {
                    onChange(name, text)
                }}
                autoCapitalize={"none"}
                onFocus={() => {
                    setIsFocus(true)
                }}
                onBlur={() => {
                    setIsFocus(false)
                }}
                style={{flex: 1}}
                underlineColorAndroid="transparent"
            />

            {
                name === "password" &&
                <TouchableOpacity onPress={handleShowPasswordButtonPress} activeOpacity={0.9}>
                    <Ionicons name={isPasswordShow ? "eye" : "eye-off"} size={20}
                              color={isFocus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"}
                    />
                </TouchableOpacity>
            }


        </StyledTextInput>

    );
}

export default CustomInput;

const StyledTextInput = styled(View)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: row;
  align-items: center;
    //margin-bottom: ${(props) => props.margin}px;
  borderBottomWidth: 1px;
  borderColor: ${(props) => props.focus ? `${colors.pointBlue}` : "rgba(0, 0, 0, 0.2)"};
  borderRadius: 10px;
  paddingHorizontal: 15px;
`;
