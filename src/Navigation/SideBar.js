import React from 'react'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem';

const SideBar = ({ isSideBarOpen, toggleSideBar }) => (

  <Drawer
    docked={false}
    open={isSideBarOpen}
    onRequestChange={toggleSideBar}
  >

    <SideBarItem
      to={'/dashboard'}
      label={'Dashboard'}
      toggleSideBar={toggleSideBar}
    />

    <SideBarItem
      to={'/basic-components'}
      label={'Basic components'}
      toggleSideBar={toggleSideBar}
    />

    <SideBarItem
      to={'/passing-parameters/cos'}
      label={'Cos'}
      toggleSideBar={toggleSideBar}
    />

    <SideBarItem
      to={'/counter'}
      label={'Counter'}
      toggleSideBar={toggleSideBar}
    />

    <SideBarItem
      to={'/to-do'}
      label={'ToDo'}
      toggleSideBar={toggleSideBar}
    />

  </Drawer>
)

export default SideBar