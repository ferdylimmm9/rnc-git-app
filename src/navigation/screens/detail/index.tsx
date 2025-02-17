import {
  Linking,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackScreenProps } from "../../types";
import { dummyRepositoryDetailInformation } from "../../../dummy";
import Container from "../../../components/container";
import Image from "../../../components/image";
import Text from "../../../components/text";
import {
  Eye,
  GitBranch,
  GitFork,
  Hammer,
  LinkSimple,
  Scales,
  Star,
  TerminalWindow,
} from "phosphor-react-native";
import colors from "../../../constant/color.constant";
import ProgrammingLanguageLabel from "../../../components/programming-language-label";
import Badge from "../../../components/badge";
import useCopyClipboard from "../../../hooks/use-copy-clipboard";
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
      {loadingRepoDetail && <DetailLoading />}
      {repoDetails && <DetailContent data={repoDetails} />}
    </Container>
  );
}
