import './App.css';
import { useState } from "react";
import ClassCompo from './Components/ClassCompo/ClassCompo';
import FunctionCompo from './Components/FunctionCompo/FunctionCompo';

function App() {
  const [data1,setData1]=useState(false);
  const [data2,setData2]=useState(false);
  const handleFunction=()=>{
    setData1(!data1);
  }
  const handleClass=()=>{
    setData2(!data2);
  }
  return (
    <div className="App">
    <h1>Styling using Functional and Class Component</h1>
    <div className='btnCntnr'>
    <button onClick={handleFunction}>To see styling in functional component</button>
    <button onClick={handleClass}>To see styling in class component</button>
    </div>
    <div className='cmpCntnr'>
    {data1?<div><FunctionCompo/></div>:null}
    {data2?<div><ClassCompo/></div>:null}
    </div>
    </div>
  );
}

export default App;
