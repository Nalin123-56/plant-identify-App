import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

const Second = (p) => {
    function GotoThird() {
        p.navigation.navigate("third");
      }

  return (
    <View style={styles.container}>
        <ImageBackground 
        source={require("../image/secndImg.jpg")}
        style={[styles.secondImage, { resizeMode: 'contain' }]}>
        <View style={styles.detect}>
            <TouchableOpacity>
            <View style={styles.camera}>
                <Image source={require('../image/cam.png')} 
                style={[styles.cam_img, { resizeMode: 'contain' }]}/>
            </View>
            </TouchableOpacity>
           <TouchableOpacity>
            <View style={styles.gallery}>
            <Image source={require('../image/gal.png')} 
                style={[styles.gal_img, { resizeMode: 'contain' }]}/>
            </View>
           </TouchableOpacity>
            
        </View>
        <View>
            <TouchableOpacity  style={styles.find_button} onPress={GotoThird}>
             <Text style={styles.button_text}>PROCESS</Text>
      </TouchableOpacity> 
        </View>
        </ImageBackground>
      
       
    </View>
  )
}

export default Second

const styles = StyleSheet.create({
    container:{
        width:responsiveWidth(100),
        height:responsiveHeight(100),
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondImage:{
        width:responsiveWidth(100),
        height:responsiveHeight(110),
    },
    detect:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:responsiveWidth(90),
        height:responsiveHeight(50),
        alignSelf:"center",
        marginTop:responsiveHeight(7),
    },
    camera:{
        backgroundColor:"white",
        width:responsiveWidth(40),
        height:responsiveHeight(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius:responsiveWidth(5),
        borderColor: 'black',
        borderWidth: 4,
    },
    gallery:{
        backgroundColor:"white",
        width:responsiveWidth(40),
        height:responsiveHeight(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius:responsiveWidth(5),
        borderColor: 'black',
        borderWidth: 4,
    },
    cam_img:{
        width:responsiveWidth(25),
        height:responsiveHeight(20), 
    },
    gal_img:{
        width:responsiveWidth(30),
        height:responsiveHeight(20), 
    },
    find_button:{
        backgroundColor:"green",
        width:responsiveWidth(40),
        height:responsiveHeight(6),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:responsiveWidth(3),
        alignSelf:"center",
        marginTop:responsiveHeight(25),
        borderColor: "white",
        borderWidth: 4,
        
    },
    button_text:{
        fontSize:responsiveFontSize(3),
        fontWeight:"bold",
        color:"white",
    }

})
