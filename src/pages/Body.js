import React from 'react'
import { SideBar } from '../Component/SideBar'
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body
