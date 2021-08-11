import { Route } from 'react-router-dom'
import './App.css'
import { Users } from './components/Users/Users'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Route exact path="/" component={Users} />
        <Route path="/profile/:id" component={Profile} />
      </div>
    </div>
  )
}

export default App
