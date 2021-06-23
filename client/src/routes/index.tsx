import { Switch, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={HomeView} />
    </Switch>
  );
};

export default Routes;
