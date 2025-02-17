import { RefreshControl, StyleSheet, View } from "react-native";
import Container from "../../../components/container";
import React from "react";
import TextInput from "../../../components/text-input";
import Text from "../../../components/text";
import useSearchRepositories from "../../../hooks/use-search-repositories";
import SearchList from "./components/search-list";
import SearchListLoading from "./components/search-list-loading";

export function Search() {
  const {
    search,
    items,
    recent,
    onChange,
    onSubmitEditing,
    onRemoveItem,
    onTapItem,
    onRefresh,
    loadingSearch,
    refreshingSearch,
  } = useSearchRepositories();
  const isSearchEmpty = search === "";
  return (
    <Container
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshingSearch} onRefresh={onRefresh} />
        ) : undefined
      }
      headers={{
        back: true,
        mainComponent: (
          <TextInput
            placeholder="Search Repository"
            isFocusFirstTime
            value={search}
            onChange={onChange}
            onSubmitEditing={onSubmitEditing}
          />
        ),
      }}
    >
      <View style={styles.container}>
        {isSearchEmpty && (
          <Text color="white" weight="bold">
            Recent
          </Text>
        )}
        {loadingSearch && <SearchListLoading />}
        {loadingSearch === false && (
          <SearchList
            data={isSearchEmpty ? recent : items || []}
            type={isSearchEmpty ? "recent" : "search"}
            onRemoveItem={onRemoveItem}
            onTapItem={onTapItem}
          />
        )}
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
