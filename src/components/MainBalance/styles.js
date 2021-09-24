import { IconButton } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Balance = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 25%;
`;

export const BalanceText = styled.Text`
  font-size: 20px;
  color: ${ colors.primary };
`;

export const BalanceContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BalanceTotal = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${ colors.black };
`;

export const ViewBalanceIcon = styled(IconButton)`
`;