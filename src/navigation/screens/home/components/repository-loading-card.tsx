import { StyleSheet, View } from "react-native";
import colors from "../../../../constant/color.constant";

export default function RepositoryLoadingCard() {
  return <View style={styles.content} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 144,
    backgroundColor: colors.lighterGray,
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
});
