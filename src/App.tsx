// import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListVacationStays from './pages/ListVacationStays';
import DisplayVacationStay from './pages/DisplayVacationStay';

function App() {
    return (
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>
        <br />
        <Routes>
          <Route path='/' element={<ListVacationStays />} />
          <Route path='/vacation_stays/:id' element={<DisplayVacationStay />} />
        </Routes>
      </div>
    );
}

export default App
