import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RepositoryType } from "../types/model.type";
import colors from "../constant/color.constant";
import Text from "./text";
import ProgrammingLanguageLabel from "./programming-language-label";
import { GitFork, Scales, Star } from "phosphor-react-native";
import Badge from "./badge";
import React from "react";
import { useNavigation } from "@react-navigation/native";

interface RepositoryCardProps {
  data: RepositoryType;
}

export default function RepositoryCard(props: RepositoryCardProps) {
  const { name, description, language, forks_count, stargazers_count } =
    props.data;

  const topics = props.data.topics.slice(0, 2);
  const topicRestCount = props.data.topics.slice(2).length;
  const licenseName = props.data.license?.name;

  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("Detail", { name })}>
      <View style={styles.cardContainer}>
        <Text size="large" color="white" weight="bold">
          {name}
        </Text>
        <Text color="lightGray" numberOfLines={1}>
          {description}
        </Text>
        <View style={styles.cardItemContainer}>
          <ProgrammingLanguageLabel label={language} />
          {typeof licenseName === "string" && (
            <>
              <Scales size={16} weight="fill" color={colors.lightGray} />
              <Text color="lightGray">{licenseName}</Text>
            </>
          )}
          <GitFork color={colors.lightGray} weight="fill" size={16} />
          <Text color="lightGray">{forks_count}</Text>
          <Star color={colors.lightGray} weight="fill" size={16} />
          <Text color="lightGray">{stargazers_count}</Text>
        </View>
        <View style={styles.topicContainer}>
          {topics.slice(0, 2).map((topic) => (
            <Badge title={topic} type="blue" key={topic} />
          ))}
          {topicRestCount > 0 && <Badge title={`+${topicRestCount}`} />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 16,
    gap: 8,
  },
  cardItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  topicContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
});
