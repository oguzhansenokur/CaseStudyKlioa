import React from 'react'
import {  Input } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function MyNavbar(props) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
      <Input xs='1' type="text" name="email" className='searchbox w-75  ms-4 mt-4' onChange={props.onChange} placeholder="Search" />
      <div className='mt-2 '>
        <ul>
          <Link to='/all' className='navbutton '>All Coffees</Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link to='/hot' className='navbutton'>Hot</Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link to='/iced' className='navbutton'>Iced</Link>
        </ul>
      </div>
    </div>
  )
}
