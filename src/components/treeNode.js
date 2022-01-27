import React from 'react';
import { Canvas } from 'reaflow';

function Trees ({nodes,edges,value}){
  console.log(nodes)
  console.log(edges)
  return (
    <Canvas
    maxWidth={800}
    maxHeight={600}
    nodes={nodes}
    edges={edges}
  />
  )
}
export default Trees