import {React,useState,useEffect} from 'react';
import "./tree.css"
import T from './components/treeNode';
// import { Canvas, hasLink, NodeData, EdgeData } from 'reaflow';
import {CustomCanvas} from './components/CustomCanvas'
import Test from './components/Test'
// import './styles/Tree.css'
import { Canvas, addNodeAndEdge } from 'reaflow';

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
    insert(data)
    {
        var newNode = new Node(data);
         
        if(this.root === null){
            this.root = newNode;
        }    
        else{
            this.insertNode(this.root, newNode);
        }    
    }
    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else if(newNode.data > node.data)
        {
            if(node.right === null){
                node.right = newNode;
            }
            else
                this.insertNode(node.right, newNode);
        }
        else{
            return
        }
    }
    
}
var tree = new TreeNode();

function Tree() {
    const [sample,setSample] =  useState([]);
    const [edges,setEdges] = useState([]);
    function traversal(curr, sample, edges){
        if(curr != null){
            sample.push({id: `${curr.data}`,text: `${curr.data}`})
            if(curr.left != null)
            {   edges.push({id: curr.data+'-'+curr.left.data,
                from: `${curr.data}`,
                to: `${curr.left.data}`})
            }
            traversal(curr.left, sample, edges)
            if(curr.right != null){
                edges.push( {id: curr.data+'-'+curr.right.data,
                from: `${curr.data}`,
                to: `${curr.right.data}`})
            }
            traversal(curr.right, sample, edges)
        } 
    }
    
   
    function display(){
        sample.length = 0
        edges.length = 0
        traversal(tree.root, sample, edges)
        setSample([...sample])
        setEdges([...edges])
        
    }
    function Insert(){
        console.log("insert")
        let num = Math.floor((Math.random()*25))
        tree.insert(num)  
        display() 
    }
    
 
    
    return <div className = "tree-Container">
    <button onClick={()=>{Insert()}}>Insert</button>
    <Canvas
      nodes={sample}
      edges={edges}
    />
  </div>;
}

export default Tree;






// sample = [[...sample], {id: `${node.data}`,text: `${node.data}`}]
//                 edges=[[...edges], {id: node.data+'-'+newNode.data,
//                 from: `${node.data}`,
//                 to: `${newNode.data}`}]

// sample = [[...sample], {id: `${node.data}`,text: `${node.data}`}]
                // edges = [[...edges], {id: node.data+'-'+newNode.data,
                // from: `${node.data}`,
                // to: `${newNode.data}`}]