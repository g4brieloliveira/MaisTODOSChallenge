import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import { Container } from './styles'

export function LoginScreen({ navigation }) {
  return (
    <Container>
      <View>
        <Button
          icon="arrow-left"
          mode="text"
          onPress={() => navigation.navigate("SplashScreen")}
        />
        <Text>Entre com o seu username</Text>
      </View>
      <View></View>
      <View></View>
    </Container>
  );
}
