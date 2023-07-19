import './App.css';
import { GlobalStyle } from './Constants/Theme/styles'
import Estoque from './Pages/Estoque';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
        <Estoque/>
        

    </div>
  );
}

export default App;
