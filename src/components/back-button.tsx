import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constant/color.constant";
import { useNavigation } from "@react-navigation/native";
import Text from "./text";

interface BackButtonProps {
  withBackLabel?: boolean;
}

export default function BackButton(props: BackButtonProps) {
  const { withBackLabel } = props;
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <CaretLeft size={24} color={colors.lightGray} />
      {withBackLabel && (
        <Text color="lightGray" weight="medium">
          Back
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    maxHeight: 32,
  },
});
