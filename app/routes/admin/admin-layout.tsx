import React from 'react'
import { Outlet } from 'react-router'

const adminLayout = () => {
  return (
    <div className='admin-layout'>
        adminLayout == MobileSideBar
        <aside className="w-full max-w-[270px] hidden lg:block">
            SideBar
        </aside>

        <aside className="children">
            <Outlet/>
        </aside>
        </div>
  )
}

export default adminLayout