import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { CheckBoxContainer, Label } from './styles';
import { LabelProps } from '../types';

export const CustomCheckBox = ({ label }: LabelProps) => {
  return (
    <CheckBoxContainer>
      <CheckBox />
      <Label>{label}</Label>
    </CheckBoxContainer>
  );
};
