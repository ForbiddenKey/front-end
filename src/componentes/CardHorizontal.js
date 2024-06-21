import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import COR from '../assets/CSS/COR';
import AutoScroll from "@homielab/react-native-auto-scroll";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get('window');


export default function CardHorizontal(props){

  const [ativador,setAtivador ] = useState(false)

  const EnviarDadosTelaJogoENavegar = (idJogo) =>{
    props.navigation.navigate("Jogo",{idJogo:idJogo,nav:props.navigation});
  }


  useEffect(()=>{
    setTimeout(() => {
      setAtivador(!ativador)
    }, 1000);
    
  },[])
  
    return (
      <AutoScroll key={ativador}>
        <ScrollView style={{width:width*3,marginEnd:RFValue(-100)}}
          //pagingEnabled={true}
          horizontal= {true}
          decelerationRate={0}
          snapToInterval={width}
          snapToAlignment={"center"}
          contentInset={{
            top: RFValue(0),
            left: RFValue(30),
            bottom: RFValue(0),
            right: RFValue(30),
          }}>
            <TouchableOpacity onPress={()=>{EnviarDadosTelaJogoENavegar(props.games[0].id)}}>
            <View style={styles.viewBanner}/>
              <Image style={styles.imagemJogo} source={{uri:props.games[0].imgUrl}}/>
              <View style={styles.formatoPreco}>
                <Text style={styles.TextoPreco}>
                  R$ {props.games[0].price}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{EnviarDadosTelaJogoENavegar(props.games[1].id)}}>
            <View style={styles.viewBanner}/>
              <Image style={styles.imagemJogo} source={{uri:props.games[1].imgUrl}}/>
              <View style={styles.formatoPreco}>
                <Text style={styles.TextoPreco}>
                R$ {props.games[1].price}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{EnviarDadosTelaJogoENavegar(props.games[2].id)}}>
            <View style={styles.viewBanner}/>
              <Image style={styles.imagemJogo} source={{uri:props.games[2].imgUrl}}/>
              <View style={styles.formatoPreco}>
                <Text style={styles.TextoPreco}>
                  R$ {props.games[2].price}
                </Text>
              </View>
            </TouchableOpacity>
          
        </ScrollView>
      </AutoScroll>
      );
    }

    const styles = StyleSheet.create({
        viewBanner: {
          marginTop: RFValue(10),
          width: width - RFValue(20),
          margin: RFValue(10),
          height: RFValue(200),
          borderRadius: RFValue(10),
          shadowColor: COR.cinza,
          shadowOffset: {
              width: 0,
              height: RFValue(7),
          },
          shadowOpacity: 0.43,
          shadowRadius: 9.51,
          elevation: RFValue(15),
          //paddingHorizontal : 30
        },
       
        imagemJogo:{
          position:'absolute',
          alignSelf:'center',
          height:RFValue(200),
          marginTop: RFValue(10),
          width:width - RFValue(20),
          borderRadius:RFValue(10),
        },

        formatoPreco:{
          position:'absolute',
          height:RFValue(30),
          width:RFValue(100),
          marginVertical:RFValue(165),
          marginHorizontal:RFValue(40),
          backgroundColor:COR.branco,
          borderRadius:RFValue(8),
          alignItems:'center',
        },
        TextoPreco:{
          color:COR.verdeFosco,
          fontSize:RFValue(20),
          fontWeight:'bold',
        }
      });  