import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import ContactData from './containers/Checkout/ContactData';
import DeviceList from './containers/Listing/DeviceList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={ContactData} />
          <Route path="/device-list" component={DeviceList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
