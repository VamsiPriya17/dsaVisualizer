import React from 'react';
import "../tree.css"

function Node({value}) {
  return (
  <span className ="treeNode" style={{top: (value.level+1)*100}}>
  <div className="node-container">
      <p>{value.data}</p>
      {/* {value.level} */}
  </div>
  </span>
  )
}

export default Node;
