import React from 'react';
import { ChildrenProps } from '../types';
import { Content } from './styles';

export function ContentContainer({ children }: ChildrenProps) {
  return <Content>{children}</Content>;
}
