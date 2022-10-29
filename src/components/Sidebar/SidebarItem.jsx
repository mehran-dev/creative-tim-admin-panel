import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

function SidebarItem({ item, isActive, history }) {
  console.log(item)
  const [open, setOpen] = useState(false)

  if (item.childrens) {
    return (
      <div
        className={`sidebar-item  ${isActive ? 'active' : ''}   ${
          open ? 'open' : ''
        } `}
      >
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
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
            return (
              <SidebarItem
                key={index}
                item={child}
                isActive={child.path === history.location.pathname}
              />
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <a
        style={{
          display: 'flex',
        }}
        href={item.path || '#'}
        className={`sidebar-item plain  ${isActive ? 'active' : ''} `}
      >
        {item.icon && <item.icon />}
        {item.sidebarName}
      </a>
    )
  }
}

export default withRouter(SidebarItem)
