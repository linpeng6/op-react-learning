import React from 'react'
import { BrowserRouter as Router , Route, Link , Redirect} from 'react-router-dom'
import Home from './home'
function App() {
    return (
      <Router>
        <h1>App</h1>
        <Redirect to="/home" />
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/mine">Mine</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/mine" component={Mine}>
            {/* <Route path="mine/:id" component={Mine} /> */}
        </Route>
        <Route path="/home" component={Home}/>
      </Router>
    )
}

export default App


function Index(){
    return(
        <h1>Index</h1>
    )
}

function Mine(){
    return(
        <h1>Mine</h1>
    )
}