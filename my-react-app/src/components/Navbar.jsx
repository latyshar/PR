import React from 'react'
import './button.css';
import '../table.css';
import '../App.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="mainNav">
    <div className=" mainNav__logo ">
    <div className='up'>
    
    <div className='milky'>
    <Link className='text m' to="/raspisanie">Все дни</Link> 
     1-ТИВ-3
    <Link className='text m' to="/">Сегодня</Link>
    </div>
  
    </div>
    </div>
 </div>
  )
}

export default Navbar