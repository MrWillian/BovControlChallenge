import React from 'react';
import { ListRenderItem, Text } from 'react-native';
import { Checklist, ChecklistProps } from '../Checklist';
import { ChecklistsContainer, Container, Header, Title } from './styles';

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
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: '2022-02-01T10:10:21.748Z',
    updated_at: '2023-01-16T17:54:29.607Z',
    __v: 0,
  },
  {
    _id: 21078,
    type: 'Antibiótico',
    amount_of_milk_produced: '444',
    farmer: {
      name: 'Fazenda Futuro',
      city: 'camaçari',
    },
    from: {
      name: 'João Alves',
    },
    to: {
      name: 'leo alves',
    },
    number_of_cows_head: '444',
    had_supervision: false,
    location: {
      latitude: -10.3504,
      longitude: -10.0219,
    },
    created_at: '2022-02-01T10:10:21.748Z',
    updated_at: '2023-01-15T20:40:29.688Z',
    __v: 0,
  },
];

export function Checklists() {
  const renderItem: ListRenderItem<ChecklistProps> = ({ item }) => (
    <Checklist data={item} />
  );

  const getHeader = () => {
    return (
      <Header>
        <Title>Checklists</Title>
      </Header>
    );
  };

  const getFooter = () => {
    setTimeout(() => {
      return <Text>{'Loading...'}</Text>;
    }, 1000);
  };

  return (
    <Container>
      <ChecklistsContainer
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: ChecklistProps) => item._id}
        ListHeaderComponent={getHeader()}
        ListFooterComponent={getFooter()}
      />
    </Container>
  );
}
