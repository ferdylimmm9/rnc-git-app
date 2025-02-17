import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../constant/color.constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import Header, { HeaderProps } from "./header";

interface ContainerProps extends React.ComponentProps<typeof ScrollView> {
  gap?: number;
  headers?: HeaderProps;
}

export default function Container(props: ContainerProps) {
  const { gap, style, children, stickyHeaderIndices, ...rest } = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor={colors.brand} />
      <ScrollView
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            gap,
          },
          style,
        ]}
        stickyHeaderIndices={props.headers ? [0] : stickyHeaderIndices}
        {...rest}
      >
        {props.headers && <Header {...props.headers} />}
        {children}
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101929",
    paddingHorizontal: 16,
  },
});
