import './App.css';
import Events from './containers/Events';
import Members from './containers/Members';
import Home from './containers/Home';
import NotFound from './containers/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } /> 
      <Route path='/events' element={ <Events /> } />
      <Route path='/members' element={ <Members /> } />
      <Route path='/*' element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
