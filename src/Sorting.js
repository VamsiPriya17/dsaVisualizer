import "./App.css";
import React, { useState, useEffect } from "react";
import Bar from "./components/Bar";
import {bubbleSort} from "./algorithms/bubble";
import {selectionSort} from "./algorithms/selection";
import {insertionSort} from "./algorithms/insertion";
import {mergesort} from "./algorithms/merge";
import {quickSort} from "./algorithms/quick";
function Sorting({setOption})
{
  const [array, setArray] = useState([]);
  const [store, setStore] = useState([]);
  const [isRun, setRun] = useState(0)
  let a;
  const sortedIdx = [] 

  const generate = () => {
    let sample = [];
    for (let i = 0; i < 15; i++) {
      sample.push(Math.floor(Math.random() * 50) + 1);
    }
    setArray(sample);
    return sample;
  };

  useEffect(()=>{
    let arr = generate();
    setArray([...arr]);
    scrollToTop();
  },[])

  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
    setStore([i,j]);
    setArray([...array]);
  };

  const scrollToTop = ()=> {
    window.scrollTo(0, 0);
}

  const ms = (array,k,val) =>{
    array[k] = val ;
    setStore([k]);
    setArray([...array]);
}


  function bubbleSorting(array){
    setRun(1)
    let storeIdx = bubbleSort(array);
    for(let i = 0; i < storeIdx.length; i++){
       setTimeout(()=>{
        swap(array, storeIdx[i], storeIdx[i]+1);
       },200*i)
    }
    setTimeout(()=>{
      setStore([])
      setRun(0)
    },200*storeIdx.length)
  }
  
  function selectionSorting(array){
    setRun(1)
    let storeIdx = selectionSort(array);
    for(let i = 0; i < storeIdx.length-1; i+=2){
      setTimeout(() => {
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
      setRun(0)
    },200*storeIdx.length)
  }

  function insertionSorting(array){
    setRun(1)
    let storeIdx = insertionSort(array);
    console.log(storeIdx)
    for(let i = 0; i < storeIdx.length-1; i+=2){
      setTimeout(()=>{
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
      setRun(0)
    },200*storeIdx.length)
  }

  function quickSorting(array){
    setRun(1)
    let storeIdx = quickSort(array, 0, array.length-1);
    console.log(storeIdx);
    for(let i = 0; i <= storeIdx.length-2; i+=2){
      setTimeout(() => {
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
      setRun(0)
    },200*storeIdx.length)
  }

  function mergeSorting(array){
    setRun(1)
    let storeIdx = mergesort(array,0, array.length-1);
    for(let i = 0; i < storeIdx.length; i++){
      setTimeout(() => {
        ms(array, storeIdx[i][0], storeIdx[i][1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
      setRun(0)
    },200*storeIdx.length)
  }


  return (
    <div>
      <div className = "Header">
      
      <button
        onClick={() => {
          setOption('homepage')
        }}
      >
      Visualizer
      </button>
      <button
        onClick={() => {
          a = (isRun === 0) ? 
          bubbleSorting(array) : null;
        }}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          a = (isRun === 0) ?
          selectionSorting(array) : null;
        }}
      >
        Selection Sort
      </button>
      <button 
        onClick={() => {
          a = (isRun === 0) ?
          insertionSorting(array): null;
        }}
      >
        Insertion Sort
      </button>
      <button 
        onClick={() => {
          a = (isRun === 0) ?
          mergeSorting(array) : null;
        }}
      >
        Merge Sort
      </button>
      <button 
        onClick={() => {
          a = (isRun === 0) ?
          quickSorting(array): null;
        }}
      >
        Quick Sort
      </button>
      
      </div>
      
      <div className="App-Container" >
        {array.map((item, index) =>
          index === store[1] || index === store[0] ? (
            <Bar value={item} key={index} color="#545454" />
          ) : sortedIdx.includes(index)? (
            <Bar value={item} key={index} color="#545454" />
          ) : (
            <Bar value={item} key={index} color="#a6a6a6" />
          )
        )}
      </div>
      <div className = "button-container">
        <button className ="btn" onClick={()=>{
           a = (isRun === 0) ?
        generate() : null}}>Generate</button>
      </div>
      
    </div>
  );
}

export default Sorting;
