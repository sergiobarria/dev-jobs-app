import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ThemeSwitch from '../ui/ThemeSwitch';

const MainHeader: React.FC = () => {
  return (
    <Header>
      <nav>
        <Link to="/">
          <img src="/assets/desktop/logo.svg" alt="main logo" />
        </Link>
        <ThemeSwitch />
      </nav>
    </Header>
  );
};

const Header = styled.header`
  height: 8.5rem; // 160px
  background-image: url('/assets/mobile/bg-pattern-header.svg');
  background-repeat: no-repeat;
  background-size: cover;

  nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 1.5rem 0;
  }

  @media (min-width: 768px) {
    height: 10rem; // 160px
    background-image: url('/assets/tablet/bg-pattern-header.svg');

    nav {
      padding: 2.625rem 2.5rem 0;
    }
  }

  @media (min-width: 1024px) {
    background-image: url('/assets/desktop/bg-pattern-header.svg');

    nav {
      max-width: 1110px;
      margin: 0 auto;
    }
  }
`;

export default MainHeader;
