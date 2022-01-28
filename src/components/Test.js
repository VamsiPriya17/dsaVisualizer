import React from 'react';

function Test({n,e}) {
    console.log(n,e)
  return <div>{n.map((item)=>{<div>item.text</div>})}</div>;
}

export default Test;
