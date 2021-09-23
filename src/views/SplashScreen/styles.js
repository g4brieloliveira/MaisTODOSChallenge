import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { Button } from "react-native-paper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${ colors.primary };
`;

export const Title = styled.Text`
  font-size: 38px;
  font-weight: bold;
  color: ${ colors.secondary };
`;

export const LoginButton = styled(Button).attrs({
  contentStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 40,
  },

  labelStyle: {
    color: "#000"
  }
})`
  background-color: ${ colors.secondary };
`;