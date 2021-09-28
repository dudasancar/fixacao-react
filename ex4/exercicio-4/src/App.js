import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Qualquer from './components/Qualquer';
import Qualquer2 from './components/Qualquer2';
import MasterPage from './pages/MasterPage.js';

function App() {
  return (
    <div className="App">
      <MasterPage> 
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/componente1" component={Qualquer} />
            <Route path="/componente2" component={Qualquer2} />
          </Switch>
        </BrowserRouter>
      </MasterPage>
    </div>
  );
}

export default App;
