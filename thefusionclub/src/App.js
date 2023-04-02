import './App.css';
import Home from './containers/Home';
import NotFound from './containers/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/*' element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
