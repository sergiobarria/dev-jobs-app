import Container from './Container';
import MainHeader from './MainHeader';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
