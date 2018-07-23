import React from 'react'
import DisplayName from './DisplayName';
import DisplayArray from './DisplayArray';

const App = () => (
  <div>
    <DisplayName 
      firstname={'Magda'}
      secondname={'Klopotek'}
    />

    

    <DisplayArray
      arr={['Magda', 'Ewelina', 'Ola']}
    />
  </div>
)

export default App;
