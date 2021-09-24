import React, { useEffect, useState } from "react";
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
import { api } from "../../service/api";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);

  function formatCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const user = {
    username,
    password,
  };

  console.log(user)

  function handleLogin() {
    if (username.length > 0 && password.length > 0) {
      api
        .post("/login", { user })
        .then((response) => setIsLogged(true))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
      navigation.navigate("MainScreen");
    } else {
      setError(true);
    }
  }

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
            label={error ? "Username (obrigatório)" : "Username"}
            mode="outlined"
            keyboardType="number-pad"
            outlineColor={colors.primary}
            left={<TextInput.Icon name="account" />}
            value={formatCPF(username)}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            label={error ? "Senha (obrigatório)" : "Senha"}
            mode="outlined"
            secureTextEntry
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
        onPress={() => handleLogin()}
      >
        Entrar
      </LoginButton>
    </Container>
  );
}
