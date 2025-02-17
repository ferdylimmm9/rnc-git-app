import { StyleSheet } from "react-native";
import colors from "../../../../constant/color.constant";
import { View } from "react-native";

export default function DetailLoading() {
  return (
    <View style={styles.container}>
      <View style={[styles.content, { maxHeight: 180 }]} />
      <View style={[styles.content, { maxHeight: 300 }]} />
      <View style={[styles.content, { maxHeight: 64 }]} />
      <View style={[styles.content, { maxHeight: 64 }]} />
      <View style={[styles.content, { maxHeight: 64 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  content: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
});
