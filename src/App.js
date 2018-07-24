import React from 'react'

import SingingButton from './SingingButton'
import Border from './Border'

const App = () => (
  <div>
    <Border>
      <SingingButton 
        label={'Przycisk1'}
        funClick={()=> alert('Lalalala')} 
      />
      <SingingButton 
        label={'Przycisk2'}
        funClick={()=> alert('Halololololo')}   
      />
    </Border>
  </div>
)

export default App;
