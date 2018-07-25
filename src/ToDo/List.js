import React from 'react'
import Task from './Task'
import PaperRefined from '../components/PaperRefined';

const List = ({tasksList}) => (
    <PaperRefined>

    {tasksList.map(
        (task, index) => 
        <Task 
            task={task}
            key={index}
        />
    )}

    </PaperRefined>
)

export default List