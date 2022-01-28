import React, { useState } from 'react';
import { Canvas, addNodeAndEdge } from 'reaflow';

export default ({n,e}) => {
  const [nodes, setNodes] = useState([
    {
      id: '1',
      text: '1'
    },
    {
      id: '2',
      text: '2'
    }
  ]);
  const [edges, setEdges] = useState([]);
  const result = addNodeAndEdge(
    nodes = {n},
    edges = {e}
  );
  {setNodes(result.nodes)}
  {setEdges(result.edges)}
  return (
    <Canvas
      nodes={result.nodes}
      edges={result.edges}
      
    />
  )
};


// import React, { useState,useEffect } from 'react';
// import { Canvas, hasLink, NodeData, EdgeData } from 'reaflow';

// export default ({n,e}) => {
//   const [nodes, setNodes] = useState([]);
//   const [edges, setEdges] = useState([]);
//   useEffect(()=>{
//     setNodes(n)
//     setEdges(e)
//   },[])
//   console.log("in TreeNode", nodes, edges)
//   return (
//     <Canvas
//       nodes={nodes}
//       edges={edges}
//       width={600}
//       height={600}
//       onNodeLinkCheck={(event, from: NodeData, to: NodeData) => {
//         return !hasLink(edges, from, to);
//       }}
//       onNodeLink={(event, from, to) => {
//         const id = `${from.id}-${to.id}`;

//         setEdges([
//           ...edges,
//           {
//             id,
//             from: from.id,
//             to: to.id
//           }
//         ]);
//       }}
//     />
//   )
// };