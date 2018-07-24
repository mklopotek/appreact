import React from 'react'
import HelloWorld from './HelloWorld'
import DisplayName from './DisplayName'
import DisplayArray from './DisplayArray'
import SinginingButtonWithBorder from './SingingButtonWithBorder';
import WhatReactRenderJs from './WhatReactRendersJs';

const BasicComponents = (props) => (
    <div>
        <h1>Components </h1>
        <HelloWorld /> 
        <hr />
        <DisplayName 
            firstname="Magda"
            secondname="Klopotek"    
        />
        <hr />
        <DisplayArray 
            arr={['Ola','Ala','Ela']}
        />
        <hr />
        <WhatReactRenderJs 

        />
        <hr />
        <SinginingButtonWithBorder />
        <hr />
    </div>
)


export default BasicComponents