import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';



const SingingButton = (props) => {

    const defaultMakeSound = () => alert(props.sound)

    return (
        <div>
            <RaisedButton
                label={props.label}
                secondary={true}
                onClick={props.makeSound || defaultMakeSound}
            />
        </div>
    )
}


export default SingingButton