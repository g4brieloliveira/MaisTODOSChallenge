import React from "react";
import { IconButton } from "react-native-paper";

import {
  Container,
  ImageContent,
  TextContent,
  TransactionType,
  TransactionIsFor,
  ValueContent,
  TransactionValue,
  TransactionDate,
} from "./styles";

const ICONS = {
  recarga: "cellphone",
  pagamento: "cash-multiple",
};

export function TransactionItem({ transaction }) {
  function addZeroToFormat(number) {
    if (number <= 9) return "0" + number;
    else return number;
  }
  const date = new Date(transaction.dataTransacao);
  const newDate =
    addZeroToFormat(date.getDate().toString()) +
    "/" +
    addZeroToFormat(date.getMonth() + 1).toString();

  return (
    <Container>
      <ImageContent>
        <IconButton
          icon={
            transaction.tipoTransacao === "Pagamento"
              ? ICONS.pagamento
              : ICONS.recarga
          }
          size={20}
          disabled
          onPress={() => console.log("Pressed")}
        />
      </ImageContent>
      <TextContent>
        <TransactionType>
          {transaction.tipoTransacao} (
          {transaction.tipoLancamento === "C" ? "Crédito" : "Débito"})
        </TransactionType>
        <TransactionIsFor>{transaction.nomePortador}</TransactionIsFor>
      </TextContent>
      <ValueContent>
        <TransactionValue>
          {transaction.tipoTransacao === "Pagamento" ? "-" : "+"} R$
          {transaction.valorTransacao},00
        </TransactionValue>
        <TransactionDate>{newDate}</TransactionDate>
      </ValueContent>
    </Container>
  );
}
