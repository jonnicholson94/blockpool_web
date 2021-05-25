import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './screens/homepage'

function App() {
  return (
    <>
      <Switch>

        <Route exact path="/" component={Homepage} />
        
      </Switch>
    </>
  );
}

export default App;
