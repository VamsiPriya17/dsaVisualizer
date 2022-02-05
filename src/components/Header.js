import React from 'react';
import "../App.css";

function Header({option,setOption}) {
  return <div onClick={()=>{setOption('homepage')}}>
    header
  </div>;
}

export default Header;
