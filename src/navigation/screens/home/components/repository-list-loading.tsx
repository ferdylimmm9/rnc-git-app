import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";
import RepositoryLoadingCard from "./repository-loading-card";

export default function RepositoryListLoading() {
  return (
    <FlashList
      data={[1, 2, 3, 4, 5]}
      estimatedItemSize={5}
      estimatedListSize={{
        height: 144,
        width: Dimensions.get("screen").width,
      }}
      renderItem={({ item }) => {
        return <RepositoryLoadingCard key={item} />;
      }}
    />
  );
}
