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
    <div className="milky">1-ТИВ-3</div>
    <div className='margin'>
    <Link className='text m' to="/raspisanie">Все дни</Link> 
    <Link className='text m' to="/">Сегодня</Link></div>
    </div>
    </div>

 </div>
  )
}

export default Navbar