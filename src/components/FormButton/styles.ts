import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px 0px;

  background-color: #8b4513;
  border-radius: 5px;
  elevation: 5;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
