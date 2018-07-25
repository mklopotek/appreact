import React from 'react'
import PaperRefined from '../components/PaperRefined'
import RaisedButton from 'material-ui/RaisedButton'

const Forms = (props) => (
    <PaperRefined>
    <input 
        type={'text'} 
        placeholder={'New Task'}
        value={props.newTaskText}
        onChange={props.onNewTaskTextChanged}
    >
    </input>
    <RaisedButton
        label="Dodaj"
        secondary={true}
    ></RaisedButton>
    </PaperRefined>
)

export default Forms