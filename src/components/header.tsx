import { StyleSheet, View } from "react-native";
import colors from "../constant/color.constant";
import BackButton from "./back-button";

export interface HeaderProps {
  back?: boolean;
  mainComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  withBackLabel?: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.container}>
      {props.back && <BackButton withBackLabel={props.withBackLabel} />}
      {typeof props.mainComponent !== "undefined" && (
        <View style={styles.mainContainer}>{props.mainComponent}</View>
      )}
      {props.rightComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    height: 64,
    maxHeight: 64,
    backgroundColor: colors.brand,
    marginBottom: 16,
    flex: 1,
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  mainContainer: {
    flex: 1,
  },
});
