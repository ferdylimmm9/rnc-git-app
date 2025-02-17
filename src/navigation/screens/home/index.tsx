import { StyleSheet, TouchableOpacity, View } from "react-native";
import Container from "../../../components/container";
import { dummyInformation } from "../../../dummy";
import CompanyCard from "./components/company-card";
import TextInput from "../../../components/text-input";
import { useNavigation } from "@react-navigation/native";
import CompanyLoadingCard from "./components/company-loading-card";
import RepositoryList from "./components/repository-list";
import colors from "../../../constant/color.constant";

export function Home() {
  const { navigate } = useNavigation();
  return (
    <Container
      headers={{
        mainComponent: (
          <TouchableOpacity
            onPress={() => navigate("Search")}
            style={{ backgroundColor: colors.brand }}
          >
            <TextInput placeholder="Search Repository" readOnly />
          </TouchableOpacity>
        ),
      }}
    >
      <View style={styles.container}>
        <CompanyLoadingCard />
        <CompanyCard data={dummyInformation} />
        <RepositoryList />
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
