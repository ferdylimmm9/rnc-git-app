import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";
import RepositoryLoadingCard from "./repository-loading-card";

export default function RepositoryListLoading() {
  return (
    <FlashList
      onRefresh={() => {}}
      data={[1, 2, 3]}
      estimatedItemSize={5}
      estimatedListSize={{
        height: 100,
        width: Dimensions.get("screen").width,
      }}
      renderItem={({ item }) => {
        return <RepositoryLoadingCard key={item} />;
      }}
    />
  );
}
