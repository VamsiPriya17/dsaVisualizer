import {React,useState,useEffect} from 'react';
import "./tree.css"
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
            return 1
        }
    }
    
}
var tree = new TreeNode();
var pre , suc;
function Tree({setOption}) {
    const [sample,setSample] =  useState([]);
    const [edges,setEdges] = useState([]);
    const [curr,setCurr] = useState([]);
    const [selected, setSelected] = useState();
    const [isSel,setIsSel] = useState(-1);
    useEffect(()=>{
        setSelected(tree.root);
        scrollToTop();
    },[tree.root])
    
    const scrollToTop = ()=> {
        window.scrollTo(0, 0);
    }
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
            inorderRecur(node.right)
        }
    }
    function preorderRecur(node){
        if(node != null){
            curr.push(node.data)
            preorderRecur(node.left)
            preorderRecur(node.right)
        }
    }
    function postorderRecur(node){
        if(node != null){
            postorderRecur(node.left)
            postorderRecur(node.right)
            curr.push(node.data)
        }
    }
    function inorder(){
        display()
        curr.length=0;
        inorderRecur(tree.root)
        setCurr([...curr])
        loop();
    }
    function preorder(){
        display()
        curr.length=0;
        preorderRecur(tree.root)
        setCurr([...curr])
        loop();
    }
    function postorder(){
        display()
        curr.length=0;
        postorderRecur(tree.root)
        setCurr([...curr])
        loop();
    }
    function display(){
        sample.length = 0
        edges.length = 0
        traversal(tree.root, sample, edges)
        setSample([...sample])
        setEdges([...edges])
        
    }
    function loop(){
        for(let i = 0; i < curr.length; i++){
            setTimeout(()=>{
                let index = sample.findIndex((idx)=>(idx.id === `${curr[i]}`));
                let currArray = [...sample];
                currArray[index].className = 'traverse';
                setSample([...currArray])
            },1000*i)
        }
        setTimeout(()=>{
            display();
        },1000*curr.length)
        setCurr([]);
        setIsSel(-1);
    }
    function Insert(){
        let num = Math.floor((Math.random()*50))
        let res = 0;
        res = tree.insert(num) 
        while(res == 1){
            num = Math.floor((Math.random()*50))
            res = tree.insert(num) 
        } 
        display() 
    }
    function minVal(temp){
        let minv = temp.data;
        while (temp.left != null)
        {
            minv = temp.left.data;
            temp = temp.left;
        }
        return minv;
    }
    function removeNode(num, curr){
        if(curr == null)
            return curr;
        if(num < curr.data){
            curr.left = removeNode(num, curr.left);
        }
        else if(num > curr.data){
            curr.right = removeNode(num, curr.right);
        }
        else{
            if(curr.left == null)
                return curr.right;
            if(curr.right == null)
                return curr.left;
            curr.data = minVal(curr.right);
            curr.right = removeNode(curr.data, curr.right)
        }

        return curr;
    }
    function del(node){
        if(isSel === -1)
        alert("Please select a node.")
        else{
            let num = node.text;
            tree.root = removeNode(num, tree.root)
            sample.length = 0;
            edges.length = 0;
            traversal(tree.root, sample, edges);
            setEdges([...edges]);
            setSample([...sample]);
            setIsSel(-1);
        }
    }
    
    function search(key) {
        let node = tree.root ;
        while(node){
            if (node.data == key)
                return node;
            if(node.data>key)
            node = node.left;
            else
            node=node.right;
        }
        return node;
    }
    function minRecur(node){
        if(node != null){
            curr.push(node.data)
            minRecur(node.left) 
        }
    }
    function maxRecur(node){
        if(node != null){
            curr.push(node.data)
            maxRecur(node.right) 
        }
    }
    function min(node){
        if(isSel === -1)
        alert("Please select a node.")
        else{

            let x = search(node.text)
            curr.length=0;
            minRecur(x)
            setCurr([...curr])
            loop()
        }
        
    }
    function max(node){
        if(isSel === -1)
        alert("Please select a node.")
        else{
            let x = search(node.text)
            curr.length=0;
            maxRecur(x);
            setCurr([...curr])
            loop();
        }
    }
    function findPredSuc(node, key){
        if (node == null)
            return;
 
        if (node.data == key)
        {
            if (node.left != null)
            {
                var tmp = node.left;
                while (tmp.right != null)
                    tmp = tmp.right;
                    
                pre = tmp;
            }
            if (node.right != null)
            {
                var tmp = node.right;
                
                while (tmp.left != null)
                    tmp = tmp.left;
                    
                suc = tmp;
            }
            return;
        }
 
        if (node.data > key)
        {
            suc = node;
            findPredSuc(node.left, key);
        }
        else
        {
            pre = node;
            findPredSuc(node.right, key);
        }
    }

    function PreSuc(node){
        if(isSel === -1){
            alert("Please select a node.")
            return
        }
        display();
        pre = null;
        suc = null;
        findPredSuc(tree.root, node.text)
        if(pre != null){
            let index = sample.findIndex((idx)=>(idx.text === `${pre.data}`));
            let currArray = [...sample];
            currArray[index].className = 'pred';
            setSample([...currArray])
        }
        if(suc != null){
            let index = sample.findIndex((idx)=>(idx.text === `${suc.data}`));
            let currArray = [...sample];
            currArray[index].className = 'suc';
            setSample([...currArray])
        }
        setIsSel(-1);
    }
    return <div className = "tree-Container">
    <div className = "Header">
    <button
        onClick={() => {
          setOption('homepage')
        }}
    >Visualizer</button>
    <button onClick={()=>{Insert()}}>Insert</button>
    <button onClick={()=>{preorder()}}>Preorder</button>
    <button onClick={()=>{inorder()}}>Inorder</button>
    <button onClick={()=>{postorder()}}>Postorder</button>
    <button onClick={()=>{del(selected)}}>Delete</button>
    <button onClick={()=>{PreSuc(selected)}}>Pred-Succ</button>
    <button onClick={()=>{min(selected)}}>Minimum</button>
    <button onClick={()=>{max(selected)}}>Maximum</button>
     </div>

    <Canvas
      className='canvas'
      nodes={sample}
      edges={edges}
      
      node={( ) => (
        <Node
        style={{ fill: '#545454', strokeWidth: 1 }}
          center= {true}
          fit={true}
          draggable={false}
          linkable={false}
          onClick={(event ,node) => {
            display()
            setIsSel(1);
            setSelected(node)
            let index = sample.findIndex((idx)=>(idx.text === `${node.text}`));
            let currArray = [...sample];
            currArray[index].className = 'selected';
            setSample([...currArray]) 
          }}
        />
      )}
    arrow={<MarkerArrow style={{ fill: '#b1b1b7' }} />}
    edge={<Edge className="edge" />}
    />   
  </div>;
}

export default Tree;


