import { useState } from 'react';
import styled from 'styled-components';

import JobCard from './JobCard';
import ButtonPrimary from '../ui/ButtonPrimary';
import data from '../../data/data.json';

const JobsContainer: React.FC = () => {
  const [fetchedJobs, setFetchedJobs] = useState(6);

  const loadJobs = () => {
    setFetchedJobs(prevState => prevState + 3);
  };

  return (
    <Section>
      <GridContainer>
        {data.slice(0, fetchedJobs).map(job => {
          return <JobCard key={job.id} {...job} />;
        })}
      </GridContainer>
      <BtnContainer>
        <ButtonPrimary
          px="2rem"
          py="1rem"
          onClick={loadJobs}
          disabled={fetchedJobs >= data.length ? true : false}
        >
          Load More
        </ButtonPrimary>
      </BtnContainer>
    </Section>
  );
};

const Section = styled.section`
  max-width: 1110px;
  margin: 0 auto;
`;

const BtnContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.section`
  margin: 6rem 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 3rem;

  @media (min-width: 768px) {
    column-gap: 1rem;
    max-width: 1110px;
    margin: 6rem auto 0;
  }
`;

export default JobsContainer;
