import colors from "./color.constant";

const button = {
  default: {
    backgroundColor: colors.lighterGray,
    color: colors.white,
    borderColor: colors.white,
    padding: 8,
    borderRadius: 6,
  },
  outline: {
    backgroundColor: colors.brand,
    color: colors.white,
    borderColor: colors.white,
    padding: 8,
    borderRadius: 6,
  },
  subtle: {
    backgroundColor: colors.brand,
    color: colors.lightGray,
    borderColor: colors.brand,
    padding: 8,
    borderRadius: 6,
  }
} as const;

export type ButtonVariantType = keyof typeof button;

export default button;
