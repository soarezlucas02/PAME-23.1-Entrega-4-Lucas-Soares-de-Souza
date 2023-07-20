import './App.css';
import { GlobalStyle } from './Constants/Theme/styles'
import Estoque from './Pages/Estoque';

function App() {
  return (
    <div>
      <GlobalStyle/>
        <Estoque/>

    </div>
  );
}

export default App;
