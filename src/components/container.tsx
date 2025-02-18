import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import colors from "../constant/color.constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import Header, { HeaderProps } from "./header";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps extends React.ComponentProps<typeof ScrollView> {
  gap?: number;
  headers?: HeaderProps;
  onReachBottom?: () => void;
}

export default function Container(props: ContainerProps) {
  const { gap, style, children, stickyHeaderIndices, onReachBottom, ...rest } =
    props;
  const insets = useSafeAreaInsets();

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

    // Check if user scrolled to bottom
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
      onReachBottom?.();
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#101929" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#101929" }}>
        <ScrollView
          style={[
            styles.container,
            {
              gap,
            },
            style,
          ]}
          stickyHeaderIndices={props.headers ? [0] : stickyHeaderIndices}
          onScroll={handleScroll}
          contentContainerStyle={{ flexGrow: 1 }}
          {...rest}
        >
          {props.headers && <Header {...props.headers} />}
          {children}
        </ScrollView>
      </SafeAreaView>
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
