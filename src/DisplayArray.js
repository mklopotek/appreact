import React from 'react'
//dostaje w propsie tablice i wysiwetla w liscie tablice

const DisplayArray = (props) => {

    return (
        <h4>
            <ul>
                {
                    props.arr.map(
                        (el, key) => (
                            <ListElement 
                            value ={el}
                            key={key}
                            /> 
                        )
                    )
                }
            </ul>
        </h4>
    )
}

const ListElement = ({value}) => {
    return (
    <li>{value}</li>
    )
}

export default DisplayArray