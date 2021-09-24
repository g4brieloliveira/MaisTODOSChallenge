import styled from "styled-components";
import { colors } from '../../utils/colors';
import { Chip } from "react-native-paper";

export const Extract = styled.View`
  width: 100%;
  height: 70%;
`;

export const ExtractMenu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: ${ colors.primary };
`;

export const MenuItem= styled(Chip).attrs({
  textStyle: {
    fontSize: 16,
    color: colors.black
  },
  })
``;

export const Transactions = styled.View`
  width: 100%;
  height: 78%;
`;