import { StyleSheet, View } from "react-native";
import colors from "../../../../constant/color.constant";

export default function CompanyLoadingCard() {
  return <View style={styles.information} />;
}

const styles = StyleSheet.create({
  information: {
    flex: 1,
    maxHeight: 175,
    backgroundColor: colors.lighterGray,
  },
});
