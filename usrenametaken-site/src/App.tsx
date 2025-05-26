import { useState } from 'react'
import './App.css'
import { Pie } from 'react-chartjs-2';
import Head from "./components/header"

function App() {
  return (
    <div id='bg'>
      <div id='circles' className='big'></div>
      <div id='abs'>
        <div id='circle' className='main'>
          <div id='logo'>
            <h1><span id='cursor'>_</span>username<span id='red'>Taken</span></h1>
            <div className='columns-container'>
              <button>About</button>
              <button>About</button>
              <button>About</button>

            </div>
          </div>
          <div id='circut'></div>
        </div>
        </div>
      </div>
  )
}

function Cybersecurity() {
 return(
  <div className="column">
  <p>Cybersecurity</p>
</div>
 ); 
}
function Development() {
 return(
  <div className="column">
  <p>Development</p>
</div>
 ); 
}
function Community() {
 return(
  <div className="column">
  <p>Community</p>
</div>
 ); 
}

export default App