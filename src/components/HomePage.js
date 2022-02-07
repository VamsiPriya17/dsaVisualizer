import React from 'react';
import '../styles/homepage.css'

function HomePage({option,setOption}) {
  return<div>
        <div className='header'>
         Visualizer
        </div>
        <div className='cover-section'>
          <div className='left'>
            <h1>Visualizes various data structures and algorithms</h1>
            <a href="#features" className="view-link">
            <button className='cover-btn'>View</button>
            </a>
          </div>
          <div className='right'>
            <img src='/final.svg' className="image"/>
          </div>
        </div>
        <div className="line"></div>
       <div id ="features" className='features-section'>
        <div className="features-title">
          Features
        </div>
        <div className='features-wrapper'>

          <div className='feature-sorting' onClick={()=>{setOption('sorting')}}>
            
            <img src='/sort.svg' className='feature-image'/>
          </div>
          <div className='feature-tree' onClick={()=>{setOption('tree')}}>
            
            <img src='/tree.svg' className='feature-image'/>
          </div>
        </div>
        </div>;
      </div>
}

export default HomePage;
