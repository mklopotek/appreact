import React from 'react'
import List from './List'
import Forms from './Forms'


class ToDo extends React.Component {
    state = {
        tasks: [
            {isCompleted: false, text: 'Zjedz kolacje', key: '123'},
            {isCompleted: false, text: 'Wypij wino', key: '456'},
            {isCompleted: false, text: 'Zrób pranie', key: '986'}
        ],
        newTaskText: ''
    }

    onNewTaskTextChanged = (event) => {
        this.setState({newTaskText: event.target.value})
    }

    render(){
        return(
            <div>
                <h1>ToDo</h1>

                <Forms 
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                />

                <List 
                    tasksList={this.state.tasks}
                />

            </div>
        )

    }

}

export default ToDo