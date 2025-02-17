import { FlashList } from "@shopify/flash-list";
import { dummyList } from "../../../../dummy";
import { Dimensions } from "react-native";
import RepositoryCard from "./repository-card";
import { RepositoryType } from "../../../../types/model.type";
import Text from "../../../../components/text";

interface RepositoryListProps {
  data: RepositoryType[];
}

export default function RepositoryList(props: RepositoryListProps) {
  if (props.data.length <= 0) {
    return (
      <Text align="center" color="lightGray" size="large">
        Repository is empty
      </Text>
    );
  }

  return (
    <FlashList
      data={props.data}
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
