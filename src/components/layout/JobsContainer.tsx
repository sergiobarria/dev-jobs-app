import styled from 'styled-components';

import JobCard from './JobCard';
import data from '../../data/data.json';

const JobsContainer: React.FC = () => {
  return (
    <GridContainer>
      {data.map(job => {
        return <JobCard key={job.id} {...job} />;
      })}
    </GridContainer>
  );
};

const GridContainer = styled.section`
  margin: 6rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 3rem;

  @media (min-width: 768px) {
    column-gap: 1rem;
    max-width: 1110px;
    margin: 6rem auto;
  }
`;

export default JobsContainer;
