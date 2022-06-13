import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";


import { COLORS, SIZES, FONTS, SHADOWS } from "../constants/Themes";
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        left: 0,
        marginTop: 40,
        marginLeft: 10,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ height, width, minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.80}
      style={{
        width: width,
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        marginTop: 10,
        ...props,
      }}

      onPress={handlePress}

    >
      <Text
        style={{
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Move to details
      </Text>
    </TouchableOpacity>
  );
};
