import React from "react";
import { View,Text } from "react-native";
import { COLORS, SIZES } from "../constants/Themes";


export const Header = (props) =>{
    return(
        <View style={{paddingLeft:20,paddingTop:70,backgroundColor: COLORS.primary,width:'100%', height:200, alignItems:'flex-start',justifyContent:'center'}}>
            <Text style={{color:'white', fontSize:SIZES.extraLarge, fontWeight:'700'}}>{props.title}</Text>
        </View>
    );
};
