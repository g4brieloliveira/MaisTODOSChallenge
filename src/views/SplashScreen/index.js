import React from "react";
import { Image, Text, View } from "react-native";

import MaisTODOSLogo from "../../../assets/MaisTODOSLogo.png";

import { Container, Title, LoginButton } from './styles'

export function SplashScreen() {
  return (
    <Container>
      <Title>MaisTODOS Banking</Title>
      <Image source={MaisTODOSLogo} />
      <LoginButton
        icon="account"
        mode="contained"
        accessibilityLabel="Acessar minha conta"
        onPress={() => console.log("Pressed")}
      >
        Acessar minha conta
      </LoginButton>
    </Container>
  );
}