import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const ThemeSwitch: React.FC = () => {
  const { lightThemeOn, darkThemeOn } = useActions();
  const { isDarkTheme } = useSelector(state => state.theme);

  const [selectedTheme, setSelectedTheme] = useState(() => {
    const storageTheme = localStorage.getItem('jobs-theme');

    if (storageTheme) {
      return storageTheme;
    }

    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('jobs-theme', selectedTheme);

    if (selectedTheme === 'light') {
      lightThemeOn();
    }

    if (selectedTheme === 'dark') {
      darkThemeOn();
    }
    // eslint-disable-next-line
  }, [selectedTheme]);

  const toggleTheme = () => {
    if (isDarkTheme) {
      lightThemeOn();
      setSelectedTheme('light');
    }
    if (!isDarkTheme) {
      darkThemeOn();
      setSelectedTheme('dark');
    }
  };

  return (
    <ToggleContainer>
      <img src="/assets/desktop/icon-sun.svg" alt="light theme label" />
      <Toggle htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          defaultChecked={selectedTheme === 'dark' ? true : false}
        />
        <Switch onClick={toggleTheme}></Switch>
      </Toggle>
      <img src="/assets/desktop/icon-moon.svg" alt="dark theme label" />
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 112px;
`;

const Toggle = styled.label`
  cursor: pointer;

  input {
    position: absolute;
    visibility: hidden;
  }
`;

const Switch = styled.div`
  /* display: inline-block; */
  background-color: #fff;
  border-radius: 16px;
  width: 48px;
  height: 24px;
  position: relative;
  /* vertical-align: middle; */
  transition: background 250ms;

  &:before,
  &:after {
    content: '';
  }

  &:before {
    display: block;
    background-color: ${props => props.theme.accent};
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 14px;
    height: 14px;
    position: absolute;
    top: 5px;
    left: 5px;
    transition: all 250ms;
  }

  &:hover:before {
    background-color: ${props => props.theme.accentLight};
  }

  input:checked + & {
    /* background-color: green; */

    &:before {
      left: 30px;
    }
  }
`;

export default ThemeSwitch;
