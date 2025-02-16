import { StatusBar, StyleSheet, View } from "react-native";
import colors from "../constant/color.constant";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children } = props;
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor={colors.brand} />
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + 16,
            paddingBottom: insets.bottom + 16,
          },
        ]}
      >
        {children}
      </View>
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
