import React from "react";
import {
  TextInput as RawTextInput,
  TextInputProps as RawTextInputProps,
  StyleSheet,
} from "react-native";
import colors from "../constant/color.constant";

export interface TextInputProps extends RawTextInputProps {
  isFocusFirstTime?: boolean;
}

export default function TextInput(props: TextInputProps) {
  const { style, isFocusFirstTime = false, ...rest } = props;

  const textInputRef = React.useRef<RawTextInput>(null);
  const isFocused = React.useRef(false);
  React.useEffect(() => {
    const textInput = textInputRef.current;
    if (textInput === null) return;
    if (isFocusFirstTime === false) return;
    if (isFocused.current === true) return;
    setTimeout(() => {
      textInput.focus();
      isFocused.current = true;
    }, 100);
  }, [textInputRef.current, isFocusFirstTime]);

  return (
    <RawTextInput
      style={[styles.input, style]}
      placeholderTextColor={colors.lightGray}
      ref={textInputRef}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    color: colors.white,
    backgroundColor: "transparent",
    height: 36,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
