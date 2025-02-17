import { StyleSheet, View } from "react-native";
import { OrganizationType } from "../../../../types/model.type";
import Text from "../../../../components/text";
import { MapPin, Users } from "phosphor-react-native";
import colors from "../../../../constant/color.constant";
import Image from "../../../../components/image";

interface CompanyCardProps {
  data: OrganizationType;
}

export default function CompanyCard(props: CompanyCardProps) {
  const { name, description, followers, location, avatar_url } = props.data;
  return (
    <View style={styles.container}>
      <Image
        source={avatar_url}
        aspectRatio="1/1"
        width={64}
        borderRadius={999}
        style={styles.image}
      />
      <Text weight="bold" color="white" size="xlarge" align="center">
        {name}
      </Text>
      <Text size="large" weight="medium" color="lightGray" align="center">
        {description}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Users weight="fill" size={16} color={colors.white} />
          <Text weight="medium">{followers} Followers</Text>
        </View>
        <View style={styles.row}>
          <MapPin weight="fill" size={16} color={colors.white} />
          <Text weight="medium">Location: {location}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  image: {
    margin: "auto",
  },
  detailContainer: {
    flexDirection: "row",
    gap: 24,
    margin: "auto",
    justifyContent: "center",
    alignContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
