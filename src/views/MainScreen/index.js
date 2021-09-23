import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import { api } from "../../service/api";
import { colors } from "../../utils/colors";

import {
  Container,
  Header,
  MenuButton,
  HeaderText,
  BellButton,
  Balance,
  BalanceText,
  BalanceContent,
  BalanceTotal,
  ViewBalanceIcon,
  Extract
} from "./styles";

export function MainScreen() {
  const [transactions, setTransactions] = useState([]);
  const [isBlurred, setIsBlurred] = useState(true);

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
          onPress={() => console.log("Menu")}
        />
        <HeaderText>Carteira Digital</HeaderText>
        <BellButton
          icon="bell"
          color={colors.white}
          size={30}
          onPress={() => console.log("Notificações")}
        />
      </Header>
      <Balance>
        <BalanceText>Saldo em conta</BalanceText>
        <BalanceContent>
          {
            isBlurred ?
            <BalanceTotal>R$ ----- </BalanceTotal>
            :
            <BalanceTotal>R$ 100,00</BalanceTotal>
          }
          <ViewBalanceIcon
            icon="eye"
            color={colors.primary}
            size={30}
            onPress={() => setIsBlurred(!isBlurred)}
          />
        </BalanceContent>
      </Balance>
      <Extract>
      </Extract>
    </Container>
  );
}
