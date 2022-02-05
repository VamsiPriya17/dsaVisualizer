import React from 'react';
import Sorting from './Sorting';
import Tree from './Tree';
import Header from './components/Header';
import HomePage from './components/HomePage'
import {useState} from 'react'
function App() {
  const [option,setOption] = useState('homepage')
  return <div>
    {option==='homepage' ? <HomePage option={option} setOption={setOption}/>  : option === 'sorting' ? <Sorting setOption={setOption}/> : <Tree setOption={setOption}/>}
  </div>;
}

export default App;
