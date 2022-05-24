import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ghana from './Component/Ghana';

function App() {
  return (
    <Router >

    <Routes>

      <Route path='/' element={ <Ghana />} />
     
    
    </Routes>

  </Router>
  );
}

export default App;
