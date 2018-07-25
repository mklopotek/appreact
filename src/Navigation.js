import React from 'react'

import SideBar from './SideBar'
import AppBar from 'material-ui/AppBar'


class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Magda App"
                    onLeftIconButtonClick={this.toggleHandler}
                />
                <SideBar 
                    isSideBarOpen = {this.state.isOpen}
                    toogleSideBar = {this.toggleHandler}
                />
            </div>)
    }
}



export default Navigation 