import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import MaisTODOSLogo from "../../../assets/MaisTODOSLogo.png";

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>MaisTODOS Banking</Text>
      <Image source={MaisTODOSLogo} />
      <Button
        icon="account"
        mode="contained"
        style={{ backgroundColor: "#94D60B" }}
        onPress={() => console.log("Pressed")}
      >
        Acessar minha conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A884",
    alignItems: "center",
    justifyContent: "center",
  },
});
