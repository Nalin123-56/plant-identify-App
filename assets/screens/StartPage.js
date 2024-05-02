import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const StartPage = (p) => {
  function GotoSecond() {
    p.navigation.navigate("second");
  }
  return (
    <View style={styles.container}>
        <ImageBackground
      source={require("../image/bg.png")}
      style={[styles.backgroundImage, { resizeMode: 'contain' }]}
    >
      <View style={styles.container}>
        <View style={styles.image_container}></View>
        <TouchableOpacity style={styles.button} onPress={GotoSecond}>
          <Text style={styles.button_text}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </View>
    
  );
};

export default StartPage;

const styles = StyleSheet.create({
  backgroundImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(110),
    flex:1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },

  image_container: {
    width: responsiveWidth(80),
    justifyContent: "center",
  },

  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    justifyContent: "center",
  },

  button: {
    backgroundColor: "rgba(20, 129, 95, 1)",
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: 50,
    marginTop: responsiveHeight(75),
    borderColor: "white",
    borderWidth: 4,
  },

  button_text: {
    color: "white",
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
  },
});
