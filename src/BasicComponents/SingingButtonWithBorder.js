import React from 'react'
import Paper from 'material-ui/Paper'

import Border from './Border'
import SingingButton from './SingingButton'



const SinginingButtonWithBorder = ({ label, sound, makeSound }) => (
    <Paper 
        zDepth = {1}
    >
    <SingingButton
        label={label}
        sound={sound}
        makeSound={makeSound}
    />
    </Paper>
)

export default SinginingButtonWithBorder