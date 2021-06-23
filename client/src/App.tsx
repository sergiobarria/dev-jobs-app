import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
