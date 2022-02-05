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
  const sortedIdx = [] 

  const generate = () => {
    let sample = [];
    for (let i = 0; i < 25; i++) {
      sample.push(Math.floor(Math.random() * 50) + 1);
    }
    setArray(sample);
    return sample;
  };

  useEffect(()=>{
    let arr = generate();
    setArray([...arr])
  },[])

  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
    setStore([i,j]);
    setArray([...array]);
  };

  const ms = (array,k,val) =>{
    array[k] = val ;
    setStore([k]);
    setArray([...array]);
}


  function bubbleSorting(array){
    let storeIdx = bubbleSort(array);
    for(let i = 0; i < storeIdx.length; i++){
       setTimeout(()=>{
        swap(array, storeIdx[i], storeIdx[i]+1);
       },200*i)
    }
    setTimeout(()=>{
      setStore([])
    },200*storeIdx.length)
  }
  
  function selectionSorting(array){
    let storeIdx = selectionSort(array);
    for(let i = 0; i < storeIdx.length-1; i+=2){
      setTimeout(() => {
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
    },200*storeIdx.length)
  }

  function insertionSorting(array){
    let storeIdx = insertionSort(array);
    console.log(storeIdx)
    for(let i = 0; i < storeIdx.length-1; i+=2){
      setTimeout(()=>{
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
    },200*storeIdx.length)
  }

  function quickSorting(array){
    let storeIdx = quickSort(array, 0, array.length-1);
    console.log(storeIdx);
    for(let i = 0; i <= storeIdx.length-2; i+=2){
      setTimeout(() => {
        swap(array, storeIdx[i], storeIdx[i+1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
    },200*storeIdx.length)
  }

  function mergeSorting(array){
    let storeIdx = mergesort(array,0, array.length-1);
    for(let i = 0; i < storeIdx.length; i++){
      setTimeout(() => {
        ms(array, storeIdx[i][0], storeIdx[i][1]);
      },200*i)
    }
    setTimeout(()=>{
      setStore([])
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
        HOME 
      </button>
      <button
        onClick={() => {
          bubbleSorting(array);
        }}
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          selectionSorting(array);
        }}
      >
        Selection Sort
      </button>
      <button 
        onClick={() => {
          insertionSorting(array);
        }}
      >
        Insertion Sort
      </button>
      <button 
        onClick={() => {
          mergeSorting(array);
        }}
      >
        Merge Sort
      </button>
      <button 
        onClick={() => {
          quickSorting(array);
        }}
      >
        Quick Sort
      </button>
      
      </div>
      
      <div className="App-Container" >
        {array.map((item, index) =>
          index === store[1] || index === store[0] ? (
            <Bar value={item} key={index} color="#f28482" />
          ) : sortedIdx.includes(index)? (
            <Bar value={item} key={index} color="#f28482" />
          ) : (
            <Bar value={item} key={index} color="#84a59d" />
          )
        )}
      </div>
      <div className = "button-container">
        <button className ="btn" onClick={generate}>Generate</button>
      </div>
      
    </div>
  );
}

export default Sorting;
