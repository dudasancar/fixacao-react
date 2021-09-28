
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/otherPage/:red?:blue"  component={OtherPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
