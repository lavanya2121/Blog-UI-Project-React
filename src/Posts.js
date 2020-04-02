import React from 'react'
import {Link} from 'react-router-dom'


//npm install --save axios
import axios from 'axios'

class Posts extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        // get,post,put,delete
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            //console.log(response.data)
            const posts=response.data
            this.setState({posts})
        })//success
        .catch((err)=>{
            console.log(err)
        })//failure
    }

    render(){
        return(
            <div>
                <h2>Listing Posts-{this.state.posts.length}</h2>
                <ul>
                    {
                        this.state.posts.map(user=>{
                            return <li key={user.id}>
                            <Link to={`/posts/${user.id}`}>{user.title}
                            </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
// export default Users
export default Posts