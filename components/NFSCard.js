import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES } from "../constants/Themes";
import { RectButton } from "./Buttons";
import { useNavigation } from "@react-navigation/native";
export const NFSCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        shadowColor: 'black',
        shadowOpacity: 1

      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
          marginBottom: 150,
        }}
      >
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
          <Text style={{ height: 20, marginTop: 20 }}>{data.name}</Text>
          <RectButton
            width={130}
            height={40}
            minWidth={90}
            fontSize={SIZES.font}
            handlePress={() => { navigation.navigate('Details', { data }) }}

          /></View>
      </View>
    </View>
  );
};