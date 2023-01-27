import React from 'react';
import { Checklists } from '../../components/Checklists';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Checklists />
    </Container>
  );
}
