
import './App.css';
import Qualquer from './components/Qualquer';
import Qualquer2 from './components/Qualquer2';
import MasterPage from './pages/MasterPage.js';

function App() {
  return (
    <div className="App">
      <MasterPage> 
        <Qualquer />
        <Qualquer2 />
      </MasterPage>
    </div>
  );
}

export default App;
