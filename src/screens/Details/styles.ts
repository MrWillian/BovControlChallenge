import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;

  background-color: #228b22;
`;

export const Content = styled.View`
  display: flex;
  height: 90%;
  width: 100%;
  padding: 25px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: white;

  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.8;
  elevation: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #8b4513;
  margin-bottom: 10px;
`;

export const FarmerNameLabel = styled.Text`
  font-size: 24px;
  color: #8b4513;
`;

export const FarmerCityLabel = styled.Text`
  font-size: 16px;
  color: #8b4513;
  margin-bottom: 10px;
`;

export const LocationContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;

  background-color: #8b4513;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.8;
  elevation: 1;
`;

export const LocationLabel = styled.Text`
  font-size: 16px;
  color: #deb887;
`;

export const CowsInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;

  border-top-width: 0.8px;
  border-top-color: #696969;
`;

export const CowsHeadLabel = styled.Text`
  font-size: 16px;
`;

export const MilkProducedLabel = styled.Text`
  font-size: 16px;
`;

export const TypeContainer = styled.View`
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom-width: 0.8px;
  border-bottom-color: #696969;
`;

export const TypeLabel = styled.Text`
  font-size: 16px;
`;

export const CreatedAndUpdatedContainer = styled.View`
  margin: 15px 0px;
`;

export const CreatedAndUpdatedLabel = styled.Text``;

export const HadSupervisionContainer = styled.View`
  padding: 25px 0px;
  align-self: flex-end;
`;

export const HadSupervisionLabel = styled.Text`
  font-size: 16px;
  color: red;
`;
