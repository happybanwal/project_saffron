import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {View,Text,StyleSheet, Platform, Pressable,Image, TextInput} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';

const Info=()=>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

    const navigation=useNavigation(); 
    const nav=()=>{
        navigation.navigate(route.onBoarding.info.name)
    }
    const [fontLoading,setFontLoading]=useState(false)
    Font.loadAsync( {
        spring:(require("../../../assets/font/fontspring.otf"))
          }
      ).then( () => setFontLoading(true) )
      
      
          if (!fontLoading){
           return(
             <AppLoading/>);
          
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
            <View style={{left:17,
                  right:80,
                  top:100,
                  bottom:66
                   }}>
                <Text style={{fontFamily:"spring",fontSize:28}}>My name is </Text>
                <TextInput  placeholder="your full name"
                 style={{fontFamily:"spring",fontSize:28}} />
            </View>
            <View style={{left:17,
                  right:80,
                  top:120,
                  bottom:66
                   }}>
            <Text style={{fontFamily:"spring",fontSize:28}}>I currently live in
            </Text>
            
            <Text style={{fontFamily:"spring",fontSize:28 ,color:"grey"}}>State
             
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                   backgroundColor: "",
                   borderColor:"transparent",
                   width:50,
                   height:15,
                   
                }}
                containerStyle={{
                  backgroundColor: "" }}
    
                  />
                And City
                <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                   backgroundColor: "",
                   borderColor:"transparent",
                   width:50,
                   height:15,
                   left:10,
                   
                }}
                containerStyle={{
                  backgroundColor: "" }}
    
                  />
             
             
             </Text>
                
            </View>
            <View style={{left:17, right:80,top:140,bottom:66}}>
            <Text style={{fontFamily:"spring",fontSize:28}}>And i was born on</Text>
                <TextInput  placeholder="DDMMYY"
                 style={{fontFamily:"spring",fontSize:28}}
                />
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
export default Info;