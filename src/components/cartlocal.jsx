import React, { useEffect } from 'react'
import { useState } from 'react';


const  Cartlocal=(props)=>{
  // const [umer,setumer]=useState()
  // useEffect(()=>{
  //   setumer(props.mycart)
  // },[props.mycart])
  // console.log(umer,"ihsan")
    var mydata=localStorage.getItem("data")
    if(mydata){
// var localdata=JSON.parse(mydata)
// localdata.push(umer)
// localStorage.setItem("data",JSON.stringify(localdata))
    }
    else{
      localStorage.setItem("data",JSON.stringify([props]))
    }
  
  return (
    <div>
         <h1>{props.mycart.name}</h1>
     <p>{props.mycart.price}</p> 
     <img src={props.mycart.images?.front} alt="" /> 
    </div>
  )
}
export default Cartlocal

