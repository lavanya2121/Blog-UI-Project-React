import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserShow extends React.Component{
    constructor(){
        super();
        this.state={
            users:[],
            posts:[]
        }
    }

    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            //console.log(response.data)
            const users=response.data
            this.setState({users})
        })//success
        .catch((err)=>{
            console.log(err)
        })//failure

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
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
                console.log(this.props);
                return(
                    <div>
                        <h2>Show Page-{this.props.match.params.id}</h2>
                        <h1>User Name-{this.state.users.name}</h1>
                        <h2>Posts written by the user</h2>
                        <ul>
                            {this.state.posts.map((post)=>{
                                return(
                                <Link to={`/posts/${post.id}`}>
                                <li key={post.id}>{post.title}</li>
                                </Link>
                                )
                            })}
                        </ul>
                       <Link to="/users">Back</Link>
                    </div>
                )
            }

}

export default UserShow