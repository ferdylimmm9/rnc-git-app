import { StyleSheet, View } from "react-native";
import colors from "../constant/color.constant";
import Text from "./text";
import React from "react";

export interface BadgeProps {
  title: string;
  type?: "default" | "blue";
}

export default function Badge(props: BadgeProps) {
  const { type = "default" } = props;
  const variantStyle = React.useMemo(() => {
    switch (type) {
      case "default":
        return styles.default;
      case "blue":
        return styles.blue;
    }
  }, [type]);
  return (
    <View style={[styles.container, variantStyle]}>
      <Text weight="medium" color={variantStyle.color} align="center">
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 30,
  },
  default: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: "transparent",
    color: colors.lightGray,
  },
  blue: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    backgroundColor: colors.darkBlue,
    color: colors.lightBlue,
  },
});
