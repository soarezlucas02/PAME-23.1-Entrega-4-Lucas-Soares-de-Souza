import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './Constants/Theme/styles'
import Encomendas from './Pages/Encomendas';
import Estoque from './Pages/Estoque';
import Login from './Pages/Login';
import PaginaNaoEncontrada from './Components/PaginaNaoEncontrada';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/encomendas' element = {<Encomendas/>}/>
          <Route path='/estoque' element = {<Estoque/>}/>
          <Route path='*' element = {<PaginaNaoEncontrada/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
