import React from 'react';

import {
  Arrow,
  Container,
  Content,
  InfoContainer,
  InfoContent,
  InfoDetailsButton,
  InfoFooter,
  InfoTitle,
} from './styles';

export interface ChecklistProps {
  _id: number;
  type: string;
  amount_of_milk_produced: string;
  farmer: {
    name: string;
    city: string;
  };
  from: {
    name: string;
  };
  to: {
    name: string;
  };
  number_of_cows_head: string;
  had_supervision: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  created_at: string;
  updated_at: string;
  __v: number;
}

export function Checklist({ data }: { data: ChecklistProps }) {
  const getDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  return (
    <Container>
      <Content>
        <InfoContainer>
          <InfoTitle>Nome</InfoTitle>
          <InfoContent>{data.from.name}</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Fazenda</InfoTitle>
          <InfoContent>{data.farmer.name}</InfoContent>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle>Cidade</InfoTitle>
          <InfoContent>{data.farmer.city}</InfoContent>
        </InfoContainer>
      </Content>
      <InfoFooter>
        <InfoContainer>
          <InfoTitle>Criado em</InfoTitle>
          <InfoContent>{getDate(data.created_at)}</InfoContent>
        </InfoContainer>
        <InfoDetailsButton>
          <Arrow>&gt;</Arrow>
        </InfoDetailsButton>
      </InfoFooter>
    </Container>
  );
}
