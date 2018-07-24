import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

import PassingParameters from './PassingParameters'
import BasicComponents from './BasicComponents'
import Dashboard from './Dashboard'



const App = () => (
  <div>
    <Router>
      <div>
        <AppBar
          title="Magda App"
        />
        <Link to={'/dashboard'}>Dashboard</Link>
        <br />
        <Link to={'/basic-components'}>Basic components</Link>
        <br />
        <Link to ={'/passing-parameters/cos'}>Cos</Link>

        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/basic-components'} component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
      </div>
    </Router>

  </div>
)

export default App;
