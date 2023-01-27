import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  display: flex;
  height: 100%;
  padding: 10px;

  background-color: #228b22;
`;
