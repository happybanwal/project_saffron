import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {StyleSheet,Text, SafeAreaView, Platform, View,Image, Pressable,TextInput} from "react-native"
import route from "../../../assets/routes";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

const Mobile=()=>{
    const navigation=useNavigation(); 
    const [fontLoading,setFontLoading]=useState(false)
    Font.loadAsync( {
        spring:(require("../../../assets/font/fontspring.otf"))
          }
      ).then( () => setFontLoading(true) )
      
      
          if (!fontLoading){
           return(
             <AppLoading/>);
          
            } 

    const nav=()=>{
        navigation.navigate(route.onBoarding.info.name)
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <Pressable onPress={nav}>
                    <Image style={{width: 17,height: 19.5}} source={require('../../../assets/chevron-right.png')}/>
                </Pressable>

                <Image source={require("../../../assets/m.png")}/>
            </View>
            <View>
                <Image style={{width: 24.02,height: 32.89,top:60}} source={require('../../../assets/Subtract.png')}/>
            </View>
            <View style={styles.container_text}>
                <Text style={{fontFamily:"spring",fontSize:28}} >Hello,</Text>
                <Text style={{fontFamily:"spring",fontSize:28}}>what's Yours Mobile</Text>
                <Text style={{fontFamily:"spring",fontSize:28}}>Number ?</Text>
            </View>
            <View style={styles.container_input}>
            <TextInput
                placeholder="ENTER ...."
                keyboardType="numeric"
                
                placeholderTextColor='black'

                /> 
           
            </View >  
            <View style={{
                flexDirection:"row", 
                justifyContent:"flex-end",
                top:350,
             
                  }}>
                <Pressable onPress={nav}
                 style={{backgroundColor:"black",
                        width:102,
                        height:52 ,
                        borderRadius:1000 ,
                        justifyContent:"center",
                        alignItems:"center"
                        }}>
                    <Text style={{color:"white",width:35,height:16
                    
                  }}>NEXT</Text>
                </Pressable>
            </View>
           
            
            
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        marginHorizontal:20,
        marginTop:40
    },
    head:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    container_text:{
        position: "absolute",
        width: 328,
        height: 132,
        left: 4,
        top: 160,
    },
    container_input:{
     flexDirection:"row",
     display:"flex",
     alignItems:"center",
     borderColor:"#26262A",
     gap:10,
     position:"absolute",
     width:321,
     height:64,
     left:24,
     top:295,
     
    }

})
export default Mobile;