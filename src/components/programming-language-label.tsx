import { StyleSheet, View } from "react-native";
import { PredefinedFirst } from "../types/helper.type";
import React from "react";
import { Circle } from "phosphor-react-native";
import Text from "./text";

export type ProgrammingLanguageType =
  | "C++"
  | "JavaScript"
  | "TypeScript"
  | "Java"
  | "Dockerfile"
  | "Shell";

export interface ProgrammingLanguageLabelProps {
  label: PredefinedFirst<ProgrammingLanguageType> | null;
}

export default function ProgrammingLanguageLabel(
  props: ProgrammingLanguageLabelProps
) {
  const color = React.useMemo(() => {
    switch (props.label) {
      case "C++":
        return "#f34b7d";
      case "JavaScript":
        return "#f1e05a";
      case "TypeScript":
        return "#3178c6";
      case "Java":
        return "rgb(176, 114, 25)";
      case "Dockerfile":
        return "rgb(56, 77, 84)";
      case "Shell":
        return "#89e051";
      default:
        return undefined;
    }
  }, [props.label]);
  if (!props.label) return null;
  return (
    <View style={styles.container}>
      {typeof color === "string" && <Circle weight="fill" color={color} size={12} />}
      <Text color="lightGray">{props.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
