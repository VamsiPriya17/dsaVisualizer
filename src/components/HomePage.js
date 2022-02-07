import React from 'react';
import "../App.css";

function HomePage({option,setOption}) {
  return<div>
      <div className='Header'>
        <button >Visualizer</button>
      </div>
       <div className='heading'>
      <div className='heading-item sorting' onClick={()=>{setOption('sorting')}}></div>
      <div className='heading-item tree' onClick={()=>{setOption('tree')}}></div>
  </div>;
  </div>
}

export default HomePage;
