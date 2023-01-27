import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { Container, Input } from './styles';

export function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearchText(e.nativeEvent.text);
  };

  return (
    <Container>
      <Input
        placeholder="Search..."
        value={searchText}
        onChangeText={(e) => handleChangeSearchText(e)}
      />
    </Container>
  );
}
