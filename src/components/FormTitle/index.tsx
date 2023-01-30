import React from 'react';
import { LabelProps } from '../types';
import { Title } from './styles';

export function FormTitle({ label }: LabelProps) {
  return <Title>{label}</Title>;
}
