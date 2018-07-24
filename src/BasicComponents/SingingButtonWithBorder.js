import React from 'react'

import Border from './Border'
import SingingButton from './SingingButton'



const SinginingButtonWithBorder = ({label, sound, makeSound}) => (
    <Border>
        <SingingButton 
        label={label} 
        sound={sound}
        makeSound={makeSound}
        />
    </Border>
)

export default SinginingButtonWithBorder