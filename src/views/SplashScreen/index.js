import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";

import MaisTODOSLogo from "../../../assets/MaisTODOSLogo.png";

import { Container, Title, LoginButton } from './styles'

export function SplashScreen({ navigation }) {
  return (
    <Container>
      <StatusBar style="auto"/>
      <Title>MaisTODOS Banking</Title>
      <Image source={MaisTODOSLogo} />
      <LoginButton
        icon="account"
        mode="contained"
        accessibilityLabel="Acessar minha conta"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Acessar minha conta
      </LoginButton>
    </Container>
  );
}