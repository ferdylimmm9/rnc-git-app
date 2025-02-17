import {
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../../../components/container";
import { dummyInformation } from "../../../dummy";
import CompanyCard from "./components/company-card";
import TextInput from "../../../components/text-input";
import { useNavigation } from "@react-navigation/native";
import CompanyLoadingCard from "./components/company-loading-card";
import RepositoryList from "./components/repository-list";
import colors from "../../../constant/color.constant";
import useHomeData from "../../../hooks/use-home-data";
import RepositoryListLoading from "./components/repository-list-loading";
import React from "react";
import Text from "../../../components/text";

export function Home() {
  const { navigate } = useNavigation();
  const {
    handleLoadMore,
    handleRefresh,
    organization,
    loadingOrganization,
    loadingRepos,
    refreshing,
    repos,
    errorOrganization,
  } = useHomeData();

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      onReachBottom={handleLoadMore}
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
        {typeof errorOrganization && (
          <Text color="error" weight="medium" align="center">
            {errorOrganization}
          </Text>
        )}
        {loadingOrganization && <CompanyLoadingCard />}
        {organization && <CompanyCard data={organization} />}
        {refreshing === false && <RepositoryList data={repos} />}
        {loadingRepos && <RepositoryListLoading />}
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
