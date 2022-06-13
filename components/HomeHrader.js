import React from "react";
import { View,Text } from "react-native";
import { COLORS } from "../constants/Themes";


export const Header = (props) =>{
    return(
        <View style={{padding:10,backgroundColor: COLORS.secondary,width:'100%', height:110, alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>{props.title}</Text>
        </View>
    );
};
