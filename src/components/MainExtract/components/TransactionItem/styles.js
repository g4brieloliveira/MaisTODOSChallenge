import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  margin: 5px 10px 5px;

  border-bottom-width: 1px;
  border-color: #00000044;
`;

export const ImageContent = styled.View`
  width: 20%;
`;

export const TextContent = styled.View`
  width: 60%;
`;

export const TransactionType = styled.Text`
  font-weight: bold;
`;

export const TransactionIsFor = styled.Text``;

export const ValueContent = styled.View`
  width: 20%;
  align-items: flex-end;
`;

export const TransactionValue = styled.Text``;

export const TransactionDate = styled.Text``;
