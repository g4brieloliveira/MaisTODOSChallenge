import React from "react";
import { colors } from "../../utils/colors";
import { Header, MenuButton, HeaderText, BellButton } from "./styles";

export function MainHeader() {
  return (
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
  );
}
