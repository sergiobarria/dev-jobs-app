// import { useState } from 'react';
import { useSelector } from './hooks/useTypedSelector';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';
// import { useActions } from './hooks/useActions';

import Routes from './routes';

const App: React.FC = () => {
  // const { lightThemeOn, darkThemeOn } = useActions();
  const { isDarkTheme } = useSelector(state => state.theme);

  // const toggleTheme = () => {
  //   if (isDarkTheme) {
  //     lightThemeOn();
  //   }
  //   if (!isDarkTheme) {
  //     darkThemeOn();
  //   }
  // };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
      {/* <button onClick={toggleTheme}>Hellooow</button> */}
    </ThemeProvider>
  );
};

export default App;
