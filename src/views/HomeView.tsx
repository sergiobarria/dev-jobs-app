import FilterBar from '../components/ui/FilterBar';
import JobsContainer from '../components/layout/JobsContainer';

const HomeView: React.FC = () => {
  return (
    <>
      <FilterBar />
      <JobsContainer />
    </>
  );
};

export default HomeView;
