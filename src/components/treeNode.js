import React from 'react';
import { Canvas } from 'reaflow';

function Trees ({nodes,edges,value}){
  console.log(value)
  console.log(edges)
  return (
    <Canvas
    maxWidth={250}
    maxHeight={250}
    nodes={nodes}
    edges={edges}
  />
  )
}
export default Trees