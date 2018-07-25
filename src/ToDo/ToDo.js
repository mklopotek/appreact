import React from 'react'
import List from './List'
import Forms from './Forms'


class ToDo extends React.Component {
    state = {
        tasks: [
            {isCompleted: false, text: 'Zjedz kolacje'},
            {isCompleted: false, text: 'Wypij wino'}
        ]
    }

    render(){
        return(
            <div>
                <h1>ToDo</h1>
                <Forms />
                <List 
                    tasksList={this.state.tasks}
                />

            </div>
        )

    }

}

export default ToDo