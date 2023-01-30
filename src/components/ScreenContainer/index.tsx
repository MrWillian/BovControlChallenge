import React from 'react';
import { ChildrenProps } from '../types';
import { Container } from './styles';

export function ScreenContainer({ children }: ChildrenProps) {
  return <Container>{children}</Container>;
}
