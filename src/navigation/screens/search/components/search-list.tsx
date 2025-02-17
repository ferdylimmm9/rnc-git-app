import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Image from "../../../../components/image";
import Text from "../../../../components/text";
import { X } from "phosphor-react-native";
import colors from "../../../../constant/color.constant";
import { SearchType } from "../../../../types/model.type";

interface SearchListProps {
  data: SearchType["items"];
  type: "recent" | "search";
  onTapItem: (item: SearchType["items"][0]) => void;
  onRemoveItem: (item: SearchType["items"][0]) => void;
}

export default function SearchList(props: SearchListProps) {
  const { data, type, onRemoveItem, onTapItem } = props;
  const { navigate } = useNavigation();
  const isRecent = type === "recent";

  if (data.length === 0) {
    return (
      <Text align="center" color="lightGray" size="large">
        {isRecent ? "No recent search" : "No search result"}
      </Text>
    );
  }
  return (
    <FlashList
      estimatedListSize={{
        height: 38,
        width: Dimensions.get("screen").width,
      }}
      data={data}
      estimatedItemSize={10}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              onTapItem(item);
              navigate("Detail", { name: item.name });
            }}
          >
            <View style={styles.between}>
              <Image width={32} height={32} source={item.owner.avatar_url} borderRadius={9999} />
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text weight="bold">{item.name}</Text>
                <Text color="lightGray" numberOfLines={1}>
                  {item.description}
                </Text>
              </View>
              {isRecent && (
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    onRemoveItem(item);
                  }}
                >
                  <X size={20} color={colors.lightGray} />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    gap: 16,
  },
});
