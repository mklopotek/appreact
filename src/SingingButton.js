import React from 'react'


const SingingButton = (props) => (
    <div>
        <button
           onClick={props.funClick} 
            >
            {props.label}
        </button>
    </div>
)


export default SingingButton