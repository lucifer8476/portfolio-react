import React from 'react'
import App from "../App"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function InlineCss() {
  return (
    <div>
        <h1 style={{color:"green",borderStyle:"solid"}}>This is my first heading</h1>
        <h2 className='bg-success'>Hi,how are you?</h2>
        <h3 className='abc'>Namastay</h3>
        
    </div>
  )
}
