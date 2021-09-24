import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { api } from "../../service/api";
import { TransactionItem } from "./components/TransactionItem";

import { Extract, ExtractMenu, MenuItem, Transactions } from "./styles";

export function MainExtract() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const [filter, setFilter] = useState("all");

  async function getDataFromAPI() {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data))
      .catch((err) => console.error(err));
  }

  function filterTransactions() {
    if (filter === "all") {
      setFilteredTransactions(transactions);
    }

    if (filter === "input") {
      const newArray = [];

      transactions.map((item) => {
        item.tipoTransacao === "Recarga Pré-pago " ? newArray.push(item) : null;
      });
      setFilteredTransactions(newArray);
    }

    if (filter === "output") {
      const newArray = [];

      transactions.map((item) => {
        item.tipoTransacao === "Pagamento" ? newArray.push(item) : null;
      });
      setFilteredTransactions(newArray);
    }
  }

  useEffect(() => {
    filterTransactions();
  }, [filter]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const renderItem = ({ item }) => <TransactionItem transaction={item} />;

  return (
    <Extract>
      <ExtractMenu>
        <MenuItem
          icon="equal"
          selected={filter === "all"}
          onPress={() => setFilter("all")}
        >
          Tudo
        </MenuItem>
        <MenuItem
          icon="arrow-up"
          selected={filter === "input"}
          onPress={() => setFilter("input")}
        >
          Entrada
        </MenuItem>
        <MenuItem
          icon="arrow-down"
          selected={filter === "output"}
          onPress={() => setFilter("output")}
        >
          Saída
        </MenuItem>
      </ExtractMenu>

      <Transactions>
        <FlatList
          data={filteredTransactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id + Math.random()}
        />
      </Transactions>
    </Extract>
  );
}
