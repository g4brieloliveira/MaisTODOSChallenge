import React from "react";

import {
  Container
} from "./styles";

import { MainHeader } from '../../components/MainHeader'
import { MainBalance } from "../../components/MainBalance";
import { MainExtract } from "../../components/MainExtract";

export function MainScreen() {
  return (
    <Container>
      <MainHeader />
      <MainBalance />
      <MainExtract />
    </Container>
  );
}
