import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { ScreenContainer } from '../../components/ScreenContainer';
import { HomeStackNavigatorParamList } from '../../routes/types';
import {
  CowsHeadLabel,
  CowsInfoContainer,
  CreatedAndUpdatedContainer,
  CreatedAndUpdatedLabel,
  FarmerCityLabel,
  FarmerNameLabel,
  HadSupervisionContainer,
  HadSupervisionLabel,
  LocationContainer,
  LocationLabel,
  MilkProducedLabel,
  Title,
  TypeContainer,
  TypeLabel,
} from './styles';

const data = [
  {
    _id: 16314,
    type: 'Antibiótico',
    amount_of_milk_produced: '777',
    farmer: {
      name: 'Fazenda do Leo 123',
      city: 'Camaçari',
    },
    from: {
      name: 'Fazendeiro Alves',
    },
    to: {
      name: 'klee',
    },
    number_of_cows_head: '555',
    had_supervision: true,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: '2022-02-01T10:10:21.748Z',
    updated_at: '2023-01-16T17:54:29.607Z',
    __v: 0,
  },
];

export function Details() {
  const route = useRoute<RouteProp<HomeStackNavigatorParamList, 'Details'>>();

  if (route.params?._id) {
    console.log(route.params._id);
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <Title>{data[0].from.name}</Title>
        <FarmerNameLabel>{data[0].farmer.name}</FarmerNameLabel>
        <FarmerCityLabel>{'Cidade: ' + data[0].farmer.city}</FarmerCityLabel>

        <LocationContainer>
          <LocationLabel>
            {'Latitude: ' + data[0].location.latitude}
          </LocationLabel>
          <LocationLabel>
            {'Longitude: ' + data[0].location.longitude}
          </LocationLabel>
        </LocationContainer>

        <CowsInfoContainer>
          <CowsHeadLabel>
            {'Cabeças de gado: ' + data[0].number_of_cows_head}
          </CowsHeadLabel>
          <MilkProducedLabel>
            {'Leite produzido(lt): ' + data[0].amount_of_milk_produced}
          </MilkProducedLabel>
        </CowsInfoContainer>

        <TypeContainer>
          <TypeLabel>{'Tipo: ' + data[0].type}</TypeLabel>
        </TypeContainer>

        <CreatedAndUpdatedContainer>
          <CreatedAndUpdatedLabel>
            {'Criado em: ' +
              new Date(data[0].created_at).toLocaleDateString('pt-BR')}
          </CreatedAndUpdatedLabel>
          {data[0].updated_at ? (
            <CreatedAndUpdatedLabel>
              {'Atualizado em: ' +
                new Date(data[0].updated_at).toLocaleDateString('pt-BR')}
            </CreatedAndUpdatedLabel>
          ) : (
            <CreatedAndUpdatedLabel>
              Não teve atualizações
            </CreatedAndUpdatedLabel>
          )}
        </CreatedAndUpdatedContainer>

        <HadSupervisionContainer>
          {data[0].had_supervision ? (
            <HadSupervisionLabel>
              {'Foi supervisionada por ' + data[0].to.name + '!'}
            </HadSupervisionLabel>
          ) : (
            <HadSupervisionLabel>{'Não teve supervisão!'}</HadSupervisionLabel>
          )}
        </HadSupervisionContainer>
      </ContentContainer>
    </ScreenContainer>
  );
}
