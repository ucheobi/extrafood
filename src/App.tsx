import React from 'react';
import styled from 'styled-components';
import './App.css';
import tw from 'twin.macro';
import { HomePage } from './app/containers/Homepage';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`

const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
