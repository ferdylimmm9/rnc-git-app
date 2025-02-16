import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import { dummyInformation, dummyList } from "../../dummy";
import { FlashList } from "@shopify/flash-list";
import RepositoryCard from "../../components/repository-card";
import OrganizationCard from "../../components/company-card";
import TextInput from "../../components/text-input";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("Search")}>
          <TextInput placeholder="Search Repository" readOnly />
        </TouchableOpacity>
        <OrganizationCard data={dummyInformation} />
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
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
});
