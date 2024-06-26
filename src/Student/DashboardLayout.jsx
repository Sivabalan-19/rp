import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../component/Aside';
import Dashboard from './Dashboard';
import Table from '../component/table';
import PointContainer2 from '../component/tablewithbutton';
import PointContainer from './pointtable';
import Table2 from './Eventmaster';
import Eventinfo from './Eventregister';

const DashboardLayout = ({ darkMode, toggleDarkMode }) => (
  <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
    <div className="leftside">
      <Sidebar darkMode={darkMode} />
    </div>
    <div className="rightside">
      <Routes>
        <Route path="/" element={<Dashboard   darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
        <Route path="points-container" element={<PointContainer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="my-events" element={<Table2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="event-masters" element={<PointContainer2 darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  </div>
);

export default DashboardLayout;
