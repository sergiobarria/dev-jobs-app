import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
    font-family: 'Kumbh Sans', sans-serif;
    transition: all 300ms linear;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
    color: ${props => props.theme.title};
  }

  h1 {
    font-size: 1.75rem; // 28px
    line-height: 2.125rem; // 34px
  }

  h2 {
    font-size: 1.5rem; // 24px
    line-height: 1.8125rem; // 29px
  }

  h3 {
    font-size: 1.25rem; // 20px
    line-height: 1.5rem; // 24px
  }

  h4 {
    font-size: 0.875rem; // 14px
    line-height: 1.125rem; // 18px
  }

  p {
    font-size: 1rem; // 16px
    line-height: 1.625rem; // 26px
  }
`;
