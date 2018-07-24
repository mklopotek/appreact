import React from 'react'

const styles = {
    border: '1px solid black',
    display: 'flex', 
    justifyContent: 'center',
}


const Border = (props) => (
    <div style={styles}>
    {props.children}
    </div>
)



export default Border