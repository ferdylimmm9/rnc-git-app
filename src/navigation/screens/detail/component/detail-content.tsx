import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { RepositoryDetailType } from "../../../../types/model.type";
import Image from "../../../../components/image";
import Text from "../../../../components/text";
import ProgrammingLanguageLabel from "../../../../components/programming-language-label";
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
import colors from "../../../../constant/color.constant";
import Badge from "../../../../components/badge";
import useCopyClipboard from "../../../../hooks/use-copy-clipboard";

interface DetailContentProps {
  data: RepositoryDetailType;
}

export default function DetailContent(props: DetailContentProps) {
  const { data } = props;
  const owner = props.data.owner;
  const copyToClipboard = useCopyClipboard();
  const homepage = data.homepage;
  const licenseName = data.license?.name;
  return (
    <View style={{ gap: 16 }}>
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
            {data.name}
          </Text>
          <Text color="lightGray">{data.full_name}</Text>
          <ProgrammingLanguageLabel label={data.language} />
        </View>
      </View>
      <View>
        <Text color="white" weight="bold">
          About
        </Text>
        <Text>{data.description}</Text>
      </View>
      {typeof homepage === "string" && (
        <View>
          <View style={styles.rowItem}>
            <LinkSimple size={16} color={colors.lightGray} weight="bold" />
            <Text color="lightGray">Homepage</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(homepage);
            }}
          >
            <Text color="lightBlue" weight="bold">
              {data.homepage}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {licenseName && (
        <View style={styles.rowItem}>
          <Scales size={16} weight="fill" color={colors.lightGray} />
          <Text color="lightGray">{licenseName}</Text>
        </View>
      )}
      <View style={styles.rowItem}>
        <GitFork size={16} weight="fill" color={colors.lightGray} />
        <Text color="lightGray">{data.forks_count} Forks</Text>
      </View>
      <View style={styles.rowItem}>
        <Eye size={16} weight="bold" color={colors.lightGray} />
        <Text color="lightGray">{data.watchers_count} Watcher</Text>
      </View>
      <View style={styles.rowItem}>
        <Star size={16} weight="bold" color={colors.lightGray} />
        <Text color="lightGray">{data.stargazers_count} Stars</Text>
      </View>
      <View style={styles.rowItem}>
        <Hammer size={16} weight="bold" color={colors.lightGray} />
        <Text color="lightGray">{data.open_issues_count} Issues</Text>
      </View>
      <View style={styles.rowItem}>
        <GitBranch size={16} weight="fill" color={colors.lightGray} />
        <Text color="lightGray">{data.default_branch}</Text>
      </View>
      <View style={styles.rowItem}>
        {data.topics.map((topic) => {
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
            onPress={() => copyToClipboard(data.ssh_url)}
          >
            {data.ssh_url}
          </Text>
          <Text
            color="lightBlue"
            weight="bold"
            onPress={() => copyToClipboard(data.ssh_url)}
          >
            {data.git_url}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(data.html_url);
        }}
      >
        <Badge title="Open Repository in Browser" type="blue" />
      </TouchableOpacity>
    </View>
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
