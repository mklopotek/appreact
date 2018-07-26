import React from 'react'
import List from './List'
import Forms from './Forms'


class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Zjedz kolacje', key: '123' },
            { isCompleted: false, text: 'Wypij wino', key: '456' },
            { isCompleted: false, text: 'Zrób pranie', key: '986' }
        ],
        newTaskText: ''
    }

    componentDidMount(){
        const lastState = JSON.parse(localStorage.getItem('magda-to-do-state'))
    
        if(lastState===null)return    

        this.setState(lastState)
    }

    componentWillUnmount(){
        localStorage.setItem('magda-to-do-state', JSON.stringify(this.state))
    }

    onNewTaskTextChanged = (event) => {
        this.setState({ newTaskText: event.target.value })
    }

    onAddNewTaskClickHandler = () => {
        if(this.state.newTaskText===''){return} 

        this.setState({
            tasks: this.state.tasks.concat({ isCompleted: false, text: this.state.newTaskText, key: Date.now()}),
            newTaskText: ''
        })
    }

    render() {
        return (
            <div>
                <h1>ToDo</h1>

                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />

                <List
                    tasksList={this.state.tasks}
                />

            </div>
        )

    }

}

export default ToDo