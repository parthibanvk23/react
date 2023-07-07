import React from 'react';
import { Route,  Routes} from 'react-router-dom';
import './App.css';
import BasicTable from './Table';
import BodyContent from './Content';

function App() {
  
  return (
    <React.Fragment>
      
      
      <Routes>
      <Route path="/" element={<BasicTable />} />
      <Route path="/content/:id" element={<BodyContent />} />
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
