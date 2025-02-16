import {
  Text as RawText,
  TextProps as RawTextProps,
  TextStyle,
} from "react-native";
import {
  fontSizes,
  FontSizeVariantType,
  fontWeights,
  FontWeightVariantType,
} from "../constant/typography.constant";
import colors, { ColorVariantType } from "../constant/color.constant";
import { PredefinedFirst } from "../types/helper.type";

interface TextProps extends RawTextProps {
  size?: FontSizeVariantType;
  weight?: FontWeightVariantType;
  color?: PredefinedFirst<ColorVariantType>;
  align?: TextStyle["textAlign"];
}

export default function Text(props: TextProps) {
  const {
    size = "base",
    weight = "normal",
    color = "white",
    align,
    style,
    ...rest
  } = props;

  return (
    <RawText
      style={[
        {
          fontSize: fontSizes[size],
          fontWeight: fontWeights[weight],
          color: colors[color as ColorVariantType] || color,
          textAlign: align,
        },
        style,
      ]}
      {...rest}
    />
  );
}
