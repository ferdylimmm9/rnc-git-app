import {
  ImageStyle,
  Image as RawImage,
  ImageProps as RawImageProps,
} from "expo-image";
import React from "react";

export interface ImageProps extends RawImageProps {
  width?: number;
  height?: number;
  aspectRatio?: string;
  borderRadius?: ImageStyle["borderRadius"];
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Image(props: ImageProps) {
  const { style, width, height, aspectRatio, borderRadius, ...rest } = props;
  return (
    <RawImage
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
      style={[
        {
          aspectRatio,
          width,
          height,
          borderRadius,
        },
        style,
      ]}
      {...rest}
    />
  );
}
