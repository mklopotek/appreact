import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import PassingParameters from './PassingParameters'
import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'

import Counter from './Counter'
import ToDo from './ToDo'

import Navigation from './Navigation'



const App = () => (
  <div>
    <Router>
      <div>

        <Navigation />

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />

        <Route path={'/counter'} component={() => <Counter number={5} />} />
        <Route path={'/to-do'} component={ToDo} />
      </div>
    </Router>

  </div>
)

export default App;
