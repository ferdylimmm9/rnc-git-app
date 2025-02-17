import { RefreshControl } from "react-native";
import { RootStackScreenProps } from "../../types";
import Container from "../../../components/container";
import Text from "../../../components/text";
import useDetailRepository from "../../../hooks/use-detail-repository";
import DetailContent from "./component/detail-content";
import DetailLoading from "./component/detail-loading";

export function Detail({ route }: RootStackScreenProps<"Detail">) {
  const {
    loadingRepoDetail,
    onRefresh,
    refreshingDetail,
    repoDetails,
    errorRepoDetail,
  } = useDetailRepository(route.params.name);
  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshingDetail} onRefresh={onRefresh} />
      }
      headers={{
        back: true,
        withBackLabel: true,
      }}
    >
      {typeof errorRepoDetail === "string" && (
        <Text color="red" weight="medium" align="center">
          {errorRepoDetail}
        </Text>
      )}
      {loadingRepoDetail === false && repoDetails && (
        <DetailContent data={repoDetails} />
      )}
      {loadingRepoDetail && <DetailLoading />}
    </Container>
  );
}
