import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import VendingMachine from './VendingMachine';

/** Main App component */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/sardines" element={<Sardines />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
