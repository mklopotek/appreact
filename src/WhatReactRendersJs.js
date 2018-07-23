import React from 'react'

const string = 'Ala ma kota'
const number = 123
const bool = true
const undefinedVar = undefined
const nullVar = null
const emptyArray = []
const arrWithStrings = ['Ala', 'Ela', 'Ilona']


const WhatReactRenderJs = () => (
    <div>
    {string}
    <br />
    {number}
    <br />
    {bool}
    <br />
    {undefinedVar}
    <br />    
    {nullVar}
    <br />
    {emptyArray}
    <br />
    <ul>
        {
            arrWithStrings.map((string, index) => <li key={index}>{string}</li>)
        }
    </ul>
    <br />
    </div>
)

export default WhatReactRenderJs