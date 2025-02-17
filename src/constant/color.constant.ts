const colors = {
  brand: "#101929",
  white: "#f0f6fc",
  lightGray: "#9198a1",
  lighterGray: "#212830",
  border: "#3d444d",
  darkBlue: "#388bfd1a",
  lightBlue: "#4493f8",
  error: "#CF6679",
} as const;

export type ColorVariantType = keyof typeof colors;

export default colors;
