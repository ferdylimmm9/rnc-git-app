import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "../types";
import { detailDummyInformation, dummyInformation } from "../../dummy";
import Container from "../../components/container";
import Image from "../../components/image";
import Text from "../../components/text";
import {
  CaretDown,
  CaretLeft,
  Command,
  Eye,
  GitBranch,
  GitFork,
  Hammer,
  LinkSimple,
  Scales,
  Star,
  TerminalWindow,
} from "phosphor-react-native";
import colors from "../../constant/color.constant";
import ProgrammingLanguageLabel from "../../components/programming-language-label";
import Button from "../../components/button";
import Badge from "../../components/badge";
import * as Clipboard from "expo-clipboard";
import { Toast } from "toastify-react-native";
import useCopyClipboard from "../../hooks/use-copy-clipboard";
import BackButton from "../../components/back-button";

export function Detail({ route }: RootStackScreenProps<"Detail">) {
  const owner = detailDummyInformation.owner;
  const copyToClipboard = useCopyClipboard();

  return (
    <Container>
      <View style={{ gap: 16 }}>
        <BackButton withBackLabel />
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
          }}
        >
          <Image
            source={owner.avatar_url}
            width={32}
            height={32}
            borderRadius={999}
          />
          <View>
            <Text color="lightGray">{owner.login}</Text>
            <Text color="white" weight="bold" size="large">
              {detailDummyInformation.name}
            </Text>
            <Text color="lightGray">{detailDummyInformation.full_name}</Text>
            <ProgrammingLanguageLabel label={detailDummyInformation.language} />
          </View>
        </View>
        <View>
          <Text color="white" weight="bold">
            About
          </Text>
          <Text>{detailDummyInformation.description}</Text>
        </View>
        {typeof detailDummyInformation.homepage === "string" && (
          <View>
            <View style={styles.rowItem}>
              <LinkSimple size={16} color={colors.lightGray} weight="bold" />
              <Text color="lightGray">Homepage</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(detailDummyInformation.homepage);
              }}
            >
              <Text color="lightBlue" weight="bold">
                {detailDummyInformation.homepage}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.rowItem}>
          <Scales size={16} weight="fill" color={colors.lightGray} />
          <Text color="lightGray">{detailDummyInformation.license.name}</Text>
        </View>
        <View style={styles.rowItem}>
          <GitFork size={16} weight="fill" color={colors.lightGray} />
          <Text color="lightGray">
            {detailDummyInformation.forks_count} Forks
          </Text>
        </View>
        <View style={styles.rowItem}>
          <Eye size={16} weight="bold" color={colors.lightGray} />
          <Text color="lightGray">
            {detailDummyInformation.watchers_count} Watcher
          </Text>
        </View>
        <View style={styles.rowItem}>
          <Star size={16} weight="bold" color={colors.lightGray} />
          <Text color="lightGray">
            {detailDummyInformation.stargazers_count} Stars
          </Text>
        </View>
        <View style={styles.rowItem}>
          <Hammer size={16} weight="bold" color={colors.lightGray} />
          <Text color="lightGray">
            {detailDummyInformation.open_issues_count} Issues
          </Text>
        </View>
        <View style={styles.rowItem}>
          <GitBranch size={16} weight="fill" color={colors.lightGray} />
          <Text color="lightGray">{detailDummyInformation.default_branch}</Text>
        </View>
        <View style={styles.rowItem}>
          {detailDummyInformation.topics.map((topic) => {
            return <Badge title={topic} key={topic} type="blue" />;
          })}
        </View>
        <View>
          <View style={styles.rowItem}>
            <TerminalWindow size={16} weight="bold" color={colors.lightGray} />
            <Text color="lightGray">Clone</Text>
          </View>
          <View style={{ gap: 8 }}>
            <Text
              color="lightBlue"
              weight="bold"
              onPress={() => copyToClipboard(detailDummyInformation.ssh_url)}
            >
              {detailDummyInformation.ssh_url}
            </Text>
            <Text
              color="lightBlue"
              weight="bold"
              onPress={() => copyToClipboard(detailDummyInformation.ssh_url)}
            >
              {detailDummyInformation.git_url}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(detailDummyInformation.html_url);
          }}
        >
          <Badge title="Open Repository in Browser" type="blue" />
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#101929",
    color: "#FFF",
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
});
