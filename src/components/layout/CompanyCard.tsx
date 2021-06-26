import styled from 'styled-components';

import ButtonSecondary from '../ui/ButtonSecondary';
import { ICompany } from '../../types';

const CompanyCard: React.FC<ICompany> = ({
  logo,
  logoBackground,
  company,
  website,
  apply,
}) => {
  return (
    <Card>
      <LogoContainer style={{ backgroundColor: logoBackground }}>
        <img src={logo} alt="company logo" />
      </LogoContainer>
      <CompanyInfo>
        <h3>{company}</h3>
        <p>{company.toLowerCase()}.com</p>
        <a href={website} target="_blank" rel="noreferrer">
          <ButtonSecondary px="1.25rem" py="1rem">
            Company Site
          </ButtonSecondary>
        </a>
      </CompanyInfo>
    </Card>
  );
};

const Card = styled.div`
  background-color: ${props => props.theme.elements};
  height: 205px;
  width: 87.2%;
  margin: 0 auto;
  position: relative;
  bottom: 1rem;
  border-radius: 5px;
`;

const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CompanyInfo = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 1rem;
  }
`;

export default CompanyCard;
