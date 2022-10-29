import React, { useState, useRef } from 'react'
import { withRouter, NavLink } from 'react-router-dom'

function SidebarItem({ item, history }) {
  const openRef = useRef(false) //stay open if it is already open
  const [open, setOpen] = useState(openRef.current)

  const toggleHandler = () => {
    setOpen(!open)
    openRef.current = !openRef.current
  }

  if (item.childrens) {
    return (
      <div className={`sidebar-item     ${open ? 'open' : ''} `}>
        <div className="sidebar-title" onClick={() => toggleHandler()}>
          <span
            style={{
              display: 'flex',
            }}
          >
            {item.icon && <item.icon />}
            {item.sidebarName}
          </span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => {
            console.log(child)
            return <SidebarItem key={index} item={child} />
          })}
        </div>
      </div>
    )
  } else {
    return (
      <NavLink
        activeStyle={{ backgroundColor: 'purple' }}
        style={{
          display: 'flex',
        }}
        to={item.path || '#'}
        className={`sidebar-item plain   `}
      >
        {item.icon && <item.icon />}
        {item.sidebarName}
      </NavLink>
    )
  }
}

export default withRouter(SidebarItem)
