import React, { useState } from 'react'
import './App.css';
import FormBox from './components/FormBox';
import DisplayBox from './components/DisplayBox';

function App() {
  const [box, setBox] = useState([]);

  const submitBox = (color) => {
    setBox([...box, color])
  }

  return (
    <div className="App" >
      <div className="">
        <div className="pt-4">
          <FormBox newBox={submitBox} />
        </div>
        <div className="d-flex flex-wrap">
          <DisplayBox displayBox={box} />
        </div>
      </div>
    </div>
  );
}

export default App;
