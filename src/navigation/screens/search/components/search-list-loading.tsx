import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../../../constant/color.constant";
import { FlashList } from "@shopify/flash-list";

export default function SearchListLoading() {
  return (
    <FlashList
      estimatedListSize={{
        height: 37,
        width: Dimensions.get("screen").width,
      }}
      data={[1, 2, 3, 4, 5]}
      estimatedItemSize={5}
      renderItem={({ item }) => {
        return <View style={styles.content} key={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: 37,
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 16,
  },
});
