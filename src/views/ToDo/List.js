import React from 'react'
import Task from './Task'
import PaperRefined from '../../components/PaperRefined'

const List = ({tasksList}) => (
    <PaperRefined>

    {tasksList.map( task => 
        <Task 
            task={task}
            key={task.key}
        />
    )}

    </PaperRefined>
)

export default List