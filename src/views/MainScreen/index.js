import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { api } from "../../service/api";
import { colors } from "../../utils/colors";

import {
  Container,
  Header,
  MenuButton,
  HeaderText,
  BellButton,
} from "./styles";

export function MainScreen() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <Header>
        <MenuButton
          icon="menu"
          color={colors.white}
          size={30}
          onPress={() => console.log('Menu')}
        />
        <HeaderText>Carteira Digital</HeaderText>
        <BellButton
          icon="bell"
          color={colors.white}
          size={30}
          onPress={() => console.log('Notificações')}
        />
      </Header>
    </Container>
  );
}
