import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListVacationStays from './pages/ListVacationStays';
import DisplayVacationStay from './pages/DisplayVacationStay';
import StyledNavBar from './components/styled/components/Navigation.component.styled';

function App() {
    return (
      <div className='App'>
        <StyledNavBar>
          <h2>
            <Link to='/'>Home</Link>
          </h2>
        </StyledNavBar>
        <br />
        <Routes>
          <Route path='/' element={<ListVacationStays />} />
          <Route path='/vacation_stays/:id' element={<DisplayVacationStay />} />
        </Routes>
      </div>
    );
}

export default App
