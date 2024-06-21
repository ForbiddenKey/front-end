import React from 'react';
import { View,Text, TouchableOpacity, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import COR from '../assets/CSS/COR';
// import menu from '../assets/icons/menu.png';
import pesquisa from '../assets/icons/pesquisa.png';
import carrinho from '../assets/icons/carrinho.png';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function BarraSuperior(props){
    
    const { height, width } = useWindowDimensions();

    return(
    <View style={{width:width,height:RFValue(70), backgroundColor:COR.verdeFosco,borderBottomLeftRadius:RFValue(8),borderBottomRightRadius:RFValue(8)}}>
        <View style={{flexDirection:'row',width:width,height:RFValue(60),backgroundColor:COR.branco,borderBottomLeftRadius:RFValue(10),borderBottomRightRadius:RFValue(10)}}>
        <View style={{paddingVertical:RFValue(15),paddingLeft:RFValue(5),height:RFValue(30),width:RFValue(30)}}/>
        <Text style={{paddingLeft:RFValue(20),alignSelf:'center',fontSize:RFValue(20),width:RFValue(160)}}>{props.title}</Text>
        <TouchableOpacity style={{paddingVertical:RFValue(15),paddingHorizontal:RFValue(20),height:RFValue(35),width:RFValue(35)}} onPress={() => props.navigation.navigate("Catalogo",{nav:props.navigation})} >
            <Image source={pesquisa} style={{height:RFValue(35),width:RFValue(35)}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Carrinho")}  style={{paddingVertical:RFValue(15),marginLeft:RFValue(30),height:RFValue(36),width:RFValue(37)}}>
            <Image source={carrinho} style={{height:RFValue(36),width:RFValue(37)}}/>
        </TouchableOpacity>
        </View>
   </View>
   
    )
}