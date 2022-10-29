import React from 'react'
import SidebarItem from './SidebarItem'
//import items from './sidebar.json'
import './sidebar.css'
import { withRouter } from 'react-router-dom'
//import { useLocation } from 'react-router-dom'

function Sidebar({ items, history }) {
  const isActiveHandler = (it) => {
    console.log(it.path, history.location.pathname)

    return it.path === history.location.pathname
  }

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} isActive={isActiveHandler(item)} />
      ))}
    </div>
  )
}

export default withRouter(Sidebar)
