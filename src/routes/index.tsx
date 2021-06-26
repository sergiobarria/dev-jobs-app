import { Switch, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import DetailsView from '../views/DetailsView';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/details/:jobId" component={DetailsView} />
    </Switch>
  );
};

export default Routes;
