import {React,useState,useEffect} from 'react';
import "./tree.css"
import T from './components/treeNode';
// import { Canvas, hasLink, NodeData, EdgeData } from 'reaflow';
import {CustomCanvas} from './components/CustomCanvas'
import Test from './components/Test'
// import './styles/Tree.css'
import { Canvas, Node, Edge, Port, MarkerArrow ,Label, removeNode} from 'reaflow';

class NodeClass
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
        var newNode = new NodeClass(data);
         
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
    const [curr,setCurr] = useState([]);
    function traversal(curr, sample, edges){
        if(curr != null){
            sample.push({id: `${curr.data}`,text: `${curr.data}`})
            if(curr.left != null)
            {   edges.push({id: curr.data+'-'+curr.left.data,
                from: `${curr.data}`,
                to: `${curr.left.data}`})
            }
            else{
                sample.push({id: `${curr.data}-L`, text: ` `,className: 'null'})
                edges.push({id:  `${curr.data}-L`,
                from: `${curr.data}`,
                to: `${curr.data}-L`,
                className: 'null-edge'
            })
            }
            traversal(curr.left, sample, edges)
            if(curr.right != null){
                edges.push( {id: curr.data+'-'+curr.right.data,
                from: `${curr.data}`,
                to: `${curr.right.data}`})
            }
            else{
                sample.push({id: `${curr.data}-R`, text: ` `,className:'null'})
                edges.push({id:  `${curr.data}-R`,
                from: `${curr.data}`,
                to: `${curr.data}-R`,
                className: 'null-edge'
            })
            }
            traversal(curr.right, sample, edges)
        }
    }
    
    function inorderRecur(node){
        if(node != null){
            inorderRecur(node.left)
            curr.push(node.data)
            console.log(curr)
            inorderRecur(node.right)
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
        let num = Math.floor((Math.random()*25))
        tree.insert(num)  
        display() 
    }
    function inorder(){
        curr.length=0;
        inorderRecur(tree.root)
        setCurr([...curr])
        for(let i = 0; i < curr.length; i++){
            setTimeout(()=>{
                let index = sample.findIndex((idx)=>(idx.id === `${curr[i]}`));
                let currArray = [...sample];
                currArray[index].className = 'traverse';
                setSample([...currArray])
            },1000*i)
        }
    }
    function removeNode(){
        console.log('removed')
    }
    function del(node){
        removeNode(node)
    }
    
    return <div className = "tree-Container">
    <button onClick={()=>{Insert()}}>Insert</button>
    <button onClick={()=>{inorder()}}>Inorder-Traversal</button>
    <Canvas
      nodes={sample}
      edges={edges}
      width={900}
      height={500}
      node={( ) => (
        <Node
          
          draggable={false}
          linkable={false}
          onClick={(event ,node) => {
            del(node);
          }}
        />
      )}
    //   node = {
    //     <Node
        
    //     onClick={() => {
    //         console.log(node.properties.data)
    //     }}
    //     draggable={false}
    //     linkable={false}
    //     />
    //   }
    arrow={<MarkerArrow style={{ fill: '#b1b1b7' }} />}
    edge={<Edge className="edge" />}
    />
    
  </div>;
}

export default Tree;


