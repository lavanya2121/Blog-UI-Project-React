import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import PostShow from './PostShow'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h2>Hello React from dct</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
      
    <Route path="/" component={Home} exact={true}/>
    <Route path="/users" component={Users} exact={true}/>
    <Route path="/users/:id" component={UserShow} />
    <Route path="/posts" component={Posts} exact={true}/>
    <Route path="/posts/:id" component={PostShow} exact={true}/>
      </div>
    </BrowserRouter>
    
  )
}
    
export default App//no semicolen in App.js and in index.js
