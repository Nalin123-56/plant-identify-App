import React from 'react'
import { View, Text, StyleSheet,Image} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

const Third = () => {
  return (
    <View style={styles.third_container}>
        <Text style={styles.topic}>BRAHMI</Text>
        <Text style={styles.topic_two}>Gotukola</Text>

        <View style={styles.detect_image}>
             <Image source={require('../image/gotu.jpg')} 
                style={[styles.gotu_img, { resizeMode: 'cover' }]}/>
        </View>
        <View style={styles.description}>
            <Text style={styles.descrip}>
                Gotu kola is a perennial 
                plant native to India, 
                Japan, China, Indonesia,
                South Africa, Sri Lanka,
                and the South Pacific. A 
                member of the parsley 
                family, it has no taste or 
                smell. It thrives in and 
                around water. 
            </Text>
        </View>


    </View>
  )
}

export default Third

const styles = StyleSheet.create({
    third_container:{
        flex:1,
        backgroundColor:"green",
        alignItems:"center",
    },
    topic:{
        fontSize:responsiveFontSize(6),
        color:"white",
        marginTop:responsiveHeight(9),
    },
    topic_two:{
        fontSize:responsiveFontSize(4),
        color:"white",
    },
    gotu_img:{
        width:responsiveWidth(80),
        borderRadius:responsiveWidth(8),
        height:responsiveHeight(27),
    },
    description:{
        backgroundColor:"white",
        width:responsiveWidth(70),
        height:responsiveHeight(40),
        marginTop:responsiveHeight(4),
        borderRadius:responsiveWidth(4),
        opacity:0.7,
    },
    descrip:{
        fontSize:responsiveFontSize(3.5),
        textAlign:"justify",
        padding:responsiveWidth(4),
    },
    detect_image:{
        borderColor: 'white',
        borderWidth: 4, 
        borderRadius: 10, 
        overflow: 'hidden',
    }
})