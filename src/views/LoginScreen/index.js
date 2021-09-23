import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import {
  Container,
  ContentView,
  Title,
  BackButton,
  MainContentView,
  InputView,
  LoginButton,
} from "./styles";
import { colors } from "../../utils/colors";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  return (
    <Container>
      <ContentView>
        <MainContentView>
          <BackButton
            icon="arrow-left"
            color={colors.primary}
            size={23}
            onPress={() => navigation.navigate("SplashScreen")}
          />
          <Title>Entre com o seus dados</Title>
        </MainContentView>
        <InputView>
          <TextInput
            label="Username"
            mode="outlined"
            outlineColor={colors.primary}
            left={<TextInput.Icon name="account" />}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            label="Senha"
            mode="outlined"
            outlineColor={colors.primary}
            left={<TextInput.Icon name="lock" />}
            value={password}
            onChangeText={(text) => setPasword(text)}
          />
        </InputView>
      </ContentView>
      <LoginButton
        icon="account"
        mode="contained"
        accessibilityLabel="Entrar"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Entrar
      </LoginButton>
    </Container>
  );
}
