import React from 'react';
import { ContentContainer } from '../../components/ContentContainer';
import { CustomCheckBox } from '../../components/CustomCheckBox';
import { FormButton } from '../../components/FormButton';
import { FormContainer } from '../../components/FormContainer';
import { DoubleFieldContainer } from '../../components/FormContainer/styles';
import { ScreenContainer } from '../../components/ScreenContainer';
import { TextField } from '../../components/TextField';

export function Register() {
  return (
    <ScreenContainer>
      <ContentContainer>
        <FormContainer title={'Cadastrar'}>
          <TextField
            label={'Fazendeiro'}
            placeholder={'Digite o nome do fazendeiro'}
          />
          <TextField
            label={'Fazenda'}
            placeholder={'Digite o nome da fazenda'}
          />
          <TextField
            label={'Cidade'}
            placeholder={'Digite a cidade da fazenda'}
          />
          <TextField
            label={'Supervisor'}
            placeholder={'Digite o nome do supervisor'}
          />
          <TextField
            label={'Tipo'}
            placeholder={'Digite o tipo do checklist'}
          />
          <DoubleFieldContainer>
            <TextField
              label={'Quantidade de leite'}
              placeholder={'Digite a quantidade'}
            />
            <TextField
              label={'Quantidade de cabeças'}
              placeholder={'Digite a quantidade'}
            />
          </DoubleFieldContainer>
          <CustomCheckBox label={'Teve supervisão neste mês?'} />
          <FormButton label={'Cadastrar'} />
        </FormContainer>
      </ContentContainer>
    </ScreenContainer>
  );
}
