import React from 'react'
import SidebarItem from './SidebarItem'
//import items from './sidebar.json'
import './sidebar.css'
import { withRouter } from 'react-router-dom'
//import { useLocation } from 'react-router-dom'

function Sidebar({ items, history }) {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  )
}

export default withRouter(Sidebar)
