import {React,useState,useEffect} from 'react';
import "./tree.css"
import T from './components/treeNode';
import {Canvas} from 'reaflow'
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
    insert(data)
    {
        var newNode = new Node(data);
         
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
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
        else
        {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
    traversal(root, sample, edges){
        if(root != null){
            sample.push({id: root.data,text: root.data})
            if(root.left != null){
                edges.push({id: root.data+'-'+root.left.data,
                from: root.data,
                to: root.left.data})
            }
            if(root.right != null){
                edges.push({id: root.data+'-'+root.right.data, 
                from: root.data, 
                to: root.right.data})
            }
            this.traversal(root.left, sample, edges)
            this.traversal(root.right, sample, edges)
        }
    }
}
var tree = new TreeNode();
function Tree() {
    
    const [sample,setSample] = useState([])
    
    const [edges,setEdges] = useState([])
    const [num,setNum] = useState()
    
    function display(){
        setSample([...sample])
        setEdges([...edges])
        tree.traversal(tree.root, sample, edges)
        console.log(sample)
        console.log(edges)
    }
    function Insert(num){
        tree.insert(num)
        display();
    }

  return <div className = "tree-Container">
    {/* <T nodes={[...sample]} edges={[...edges]} value={4}/> */}
    <Canvas
    maxWidth={200}
    maxHeight={200}
    nodes={sample}
    edges={edges}
  />
   <input placeholder = 'insert' onChange={(e) => setNum(parseInt(e.target.value))}/>
   <button onClick={() => {Insert(num)}}>Insert</button>
   <button onClick={() => {display()}}>Display</button>
  </div>;
}

export default Tree;
