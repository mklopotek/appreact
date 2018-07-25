import React from 'react'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = ({isSideBarOpen, toogleSideBar}) => (

      <Drawer 
        docked={false}
        open={isSideBarOpen}
        onRequestChange={toogleSideBar}
      >
        <MenuItem onClick={toogleSideBar}>CLOSE</MenuItem>

        <Link
          to={'/dashboard'}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={toogleSideBar}>Dashboard</MenuItem>
        </Link>

        <Link
          to={'/basic-components'}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={toogleSideBar}>Basic components</MenuItem>
        </Link>

        <Link
          to={'/passing-parameters/cos'}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={toogleSideBar}>Cos</MenuItem>
        </Link>

        <Link
          to={'/counter'}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={toogleSideBar}>Counter</MenuItem>
        </Link>

        <Link
          to={'/to-do'}
          style={{ textDecoration: 'none' }}
        >
          <MenuItem onClick={toogleSideBar}>ToDo</MenuItem>
        </Link>

      </Drawer>
)

export default SideBar