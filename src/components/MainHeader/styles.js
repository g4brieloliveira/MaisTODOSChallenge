import styled from 'styled-components';
import { IconButton } from "react-native-paper";
import { colors } from '../../utils/colors';

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