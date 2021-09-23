import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Button, IconButton } from 'react-native-paper';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

export const MainContentView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const InputView = styled.View`
  width: 100%;
  height: 150px;
  justify-content: space-evenly;
  margin-top: 60px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 25px;
  font-weight: bold;
  padding: 0 0 5px 0;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.secondary};
`;

export const BackButton = styled(IconButton)`
  margin-right: 10px;
  margin-left: -8px;
`;

export const LoginButton = styled(Button).attrs({
  contentStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 50,
  },

  labelStyle: {
    color: "#fff"
  }
  })`
  position: absolute;
  bottom: 60px;
  width: 100%;
  background-color: ${ colors.primary };
`;