import React from 'react';
import { FormTitle } from '../FormTitle';
import { FormChildrenProps } from '../types';
import { Container, Form } from './styles';

export function FormContainer({ children, title }: FormChildrenProps) {
  return (
    <>
      <FormTitle label={title} />
      <Container>
        <Form>{children}</Form>
      </Container>
    </>
  );
}
