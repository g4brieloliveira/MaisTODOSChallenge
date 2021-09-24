import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import { colors } from "../../utils/colors";
import {
  Balance,
  BalanceText,
  BalanceContent,
  BalanceTotal,
  ViewBalanceIcon,
} from "./styles";

export function MainBalance() {
  const [isBlurred, setIsBlurred] = useState(true);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    api
      .get("/balance")
      .then((response) => setBalance(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Balance>
      <BalanceText>Saldo em conta</BalanceText>
      <BalanceContent>
        {isBlurred ? (
          <BalanceTotal>R$ ----- </BalanceTotal>
        ) : (
          <BalanceTotal>R$ {balance.saldo},00</BalanceTotal>
        )}
        <ViewBalanceIcon
          icon="eye"
          color={colors.primary}
          size={30}
          onPress={() => setIsBlurred(!isBlurred)}
        />
      </BalanceContent>
    </Balance>
  );
}
