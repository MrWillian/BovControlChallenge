import React from 'react';
import { LabelProps } from '../types';
import { Container, Label } from './styles';

export function FormButton({ label }: LabelProps) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
}
