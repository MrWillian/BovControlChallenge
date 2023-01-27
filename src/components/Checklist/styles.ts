import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin: 5px;
  padding: 15px;
  width: 100%;
  background-color: #6b8e23;
  border-radius: 10px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  display: flex;
`;

export const InfoTitle = styled.Text`
  font-size: 10px;
  color: white;
`;

export const InfoContent = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: white;
`;

export const InfoFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 5px;
  border-top-width: 0.5px;
  border-top-color: #ccc;
`;

export const Arrow = styled.Text`
  font-size: 18px;
  color: white;
`;

export const InfoDetailsButton = styled.TouchableOpacity``;
