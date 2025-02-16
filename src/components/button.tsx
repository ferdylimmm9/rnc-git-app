import {
  FlexStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Text from "./text";
import button, { ButtonVariantType } from "../constant/button.constant";
import React from "react";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariantType;
  title: string;
  // https://mantine.dev/core/button/#sections-position
  leftSection?: (color: string) => React.ReactNode;
  rightSection?: (color: string) => React.ReactNode;
  justify?: FlexStyle["justifyContent"];
  compact?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    variant = "default",
    title,
    style,
    justify = "center",
    leftSection,
    rightSection,
    compact = false,
    ...rest
  } = props;

  const buttonVariantStyles = React.useMemo(() => {
    return button[variant];
  }, [variant]);
  
  return (
    <TouchableOpacity
      style={[
        buttonVariantStyles,
        style,
        {
          justifyContent: justify,
          alignItems:'center',
          borderWidth: 1,
        },
        styles.innerContainer,
      ]}
      {...rest}
    >
      {leftSection?.(buttonVariantStyles.color)}
      <Text color={buttonVariantStyles.color} weight="medium">
        {title}
      </Text>
      {rightSection?.(buttonVariantStyles.color)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
