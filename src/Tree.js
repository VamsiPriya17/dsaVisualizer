import {React,useState,useEffect} from 'react';
import "./tree.css"
import NodeDisplay from "./components/Node"
// import './styles/Tree.css'

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
        this.level = 0;
    }
}
class TreeNode{

    constructor(){
        this.root = null
    }

}
function Tree() {
    // let arr = []
    const [arr,setArr] = useState([])
    let root = new Node(10);
    root.left = new Node(5);
    root.left.level = 1;
    root.right = new Node(12);
    root.right.level = 1;
    // console.log(root)
    // traversal(root)
    // setArr([...arr]);
  function traversal(root){
      if(root === null)
        return;
    console.log(root.data)
    traversal(root.left);
    arr.push(root)
    setArr([...arr])
    traversal(root.right)
    
  }
  
  
  return <div className = "tree-Container">
   { arr.map((item, index) =>
      <NodeDisplay key={index} value={item}/>
   )}
   <button onClick={()=>{traversal(root)}}>Start</button>
  </div>;
}

export default Tree;
