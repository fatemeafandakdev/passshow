

import { useState } from 'react';
import "./App.css"
import React from "react";
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function App() {
const [type,setType]=useState("password")
const [icon,setIcon]=useState(eyeOff)


const change=()=>{
if (icon===eyeOff) {
  setIcon(eye)
  setType("text")
} else {
  setIcon(eyeOff)
  setType("password")
}

}
  return (
    <>
    <h2 className='text-center text-danger mt-3'>Hide-Show password</h2>
     <div className="container d-flex justify-content-center align-items-center h-vh w-100 ">
    <div className="d-flex justify-content-center p-4 color my-5">
     <input type={type}  className='input' />
     <span className='px-3' onClick={change} >< Icon icon={icon}/></span>
    </div>
   </div></>
   
  );
}

export default App;
