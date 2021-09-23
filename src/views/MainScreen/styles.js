import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { IconButton } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 70px;
  margin-top: 25px;
  background-color: ${ colors.primary };
`;

export const MenuButton = styled(IconButton)`
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  color: ${ colors.white };
`;

export const BellButton = styled(IconButton)`
`;

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

export const Extract = styled.View`
  width: 100%;
  height: 70%;
  background-color: #ff0000cc

`;