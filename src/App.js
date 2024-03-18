import React, { useState } from 'react';
import './index.css';
import { qucations } from './Api';
import Myaccodian from './Myaccodian';


function App() {
  const [data, setdata] = useState(qucations);

  return (
    <>
      <h1>React Interview Qucations</h1>
      <div className='accodinggrid'>
     {
        data.map((datavalue) => { 
         const { id} = datavalue;
          return <Myaccodian key={id}{...datavalue} />
        
      })      
        }
        </div>
    </>
  );
}

export default App;
