import { FlashList } from "@shopify/flash-list";
import { dummyList } from "../../../../dummy";
import { Dimensions } from "react-native";
import RepositoryCard from "./repository-card";

export default function RepositoryList() {
  return (
    <FlashList
      data={dummyList}
      estimatedItemSize={5}
      estimatedListSize={{
        height: 100,
        width: Dimensions.get("screen").width,
      }}
      renderItem={({ item }) => {
        return <RepositoryCard data={item} key={item.id} />;
      }}
    />
  );
}
