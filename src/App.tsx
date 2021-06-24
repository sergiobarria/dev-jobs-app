// import { useState } from 'react';
import { useSelector } from './hooks/useTypedSelector';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';
import Layout from './components/layout/Layout';

import Routes from './routes';

const App: React.FC = () => {
  const { isDarkTheme } = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <Layout>
          <GlobalStyles />
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
