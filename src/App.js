import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import { Navbar } from 'components/Navbar';
import { Slider } from 'components/Slider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar />
        <Slider />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 75px;

  @media ${(props) => props.theme.medium} {
    padding-top: 132px;
  }
`;

export default App;
