import React from 'react';
import { Container, CustomTextInput, Label } from './styles';

export const TextField = ({ label, ...inputProps }) => (
  <Container>
    <Label>{label}</Label>
    <CustomTextInput {...inputProps} placeholderTextColor="#FFF" />
  </Container>
);
