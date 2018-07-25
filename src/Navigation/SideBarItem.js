import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'

const SideBarItem = ({to, label, toggleSideBar}) => (

    <div>

    <Link
        to={to}
        style={{ textDecoration: 'none' }}
    >
        <MenuItem onClick={toggleSideBar}>
            {label}
        </MenuItem>
    </Link>

    </div>
)


export default SideBarItem