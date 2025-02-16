export const fontSizes = {
  small: 12,
  base: 14,
  large: 16,
  xlarge: 20,
} as const;

export type FontSizeVariantType = keyof typeof fontSizes;

export const fontWeights = {
  normal: "400",
  medium: "500",
  bold: "700",
} as const;

export type FontWeightVariantType = keyof typeof fontWeights;
