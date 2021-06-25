import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IJob } from '../../types';

const JobCard: React.FC<IJob> = props => {
  const {
    id,
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    company,
    location,
  } = props;
  return (
    <CardLink to={`jobs/${id}`}>
      <Card>
        <LogoContainer style={{ backgroundColor: logoBackground }}>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <CardInfo>
          <p>
            <span>{postedAt}</span>
            <span>&middot;</span>
            <span>{contract}</span>
          </p>
          <h3>{position}</h3>
          <p>{company}</p>
          <h4>{location}</h4>
        </CardInfo>
      </Card>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  grid-column: span 12;

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 4;
  }
`;

const Card = styled.article`
  background-color: ${props => props.theme.elements};
  border-radius: 5px;
  position: relative;
`;

const LogoContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 2rem;
  transform: translateY(-50%);
  background-color: crimson;
`;

const CardInfo = styled.div`
  padding: 3rem 0.5rem 2rem 2rem;

  p {
    font-size: 1rem;
    color: ${props => props.theme.text};
    padding-bottom: 1rem;
    display: flex;
    align-items: center;

    span {
      &:nth-child(2) {
        font-size: 2rem;
        margin: 0 0.5rem;
      }
    }
  }

  h3 {
    padding-bottom: 1rem;
  }

  p:last-of-type {
    padding-bottom: 2.75rem;
  }

  h4 {
    color: ${props => props.theme.accentLight};
  }
`;

export default JobCard;
