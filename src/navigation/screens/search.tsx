import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import React from "react";
import TextInput from "../../components/text-input";
import { FlashList } from "@shopify/flash-list";
import { dummyList, dummySearch } from "../../dummy";
import { CaretLeft, X } from "phosphor-react-native";
import colors from "../../constant/color.constant";
import Text from "../../components/text";
import useSearchRepositories from "../../hooks/use-search-repositories";
import Image from "../../components/image";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/back-button";

export function Search() {
  const { navigate } = useNavigation();
  const { search, onChange, onSubmitEditing } = useSearchRepositories();
  return (
    <Container>
      <View style={styles.container}>
        <View
          style={[
            styles.between,
            {
              gap: 16,
              maxHeight: 32,
            },
          ]}
        >
          <BackButton />
          <TextInput
            placeholder="Search Repository"
            isFocusFirstTime
            style={{
              flex: 1,
            }}
            value={search}
            onChange={onChange}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <Text color="white" weight="bold">
          Recent
        </Text>
        <FlashList
          estimatedListSize={{
            height: 38,
            width: Dimensions.get("screen").width,
          }}
          data={dummyList}
          estimatedItemSize={10}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation();
                  navigate("Detail", { name: item.name });
                }}
              >
                <View style={styles.between}>
                  <Image
                    width={32}
                    height={32}
                    source={item.owner.avatar_url}
                  />
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
                  <TouchableOpacity
                    onPress={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <X size={20} color={colors.lightGray} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    gap: 16,
  },
});
