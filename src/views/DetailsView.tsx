import { useParams } from 'react-router';

import CompanyCard from '../components/layout/CompanyCard';
import data from '../data/data.json';
import { IJob } from '../types';

interface JobParams {
  jobId: string;
}

const DetailsView: React.FC = () => {
  const { jobId } = useParams<JobParams>();
  const jobData = data.filter((job: IJob) => job.id === +jobId)[0];

  return (
    <CompanyCard
      id={jobData.id}
      logo={jobData.logo}
      logoBackground={jobData.logoBackground}
      company={jobData.company}
      website={jobData.website}
      apply={jobData.apply}
    />
  );
};

export default DetailsView;
