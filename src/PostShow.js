import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class PostShow extends React.Component{
      constructor(){
          super()
          this.state={
              users:[],
              posts:[],
              comments:[]
          }
      }
      componentDidMount(){
          const id=this.props.match.params.id

          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response)=>{
              const posts=response.data
          
          axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
          .then((response)=>{
              const users=response.data
              this.setState({users})
          })
          this.setState({posts})

        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        }).catch((err)=>{
            console.log(err)
        })
      }

      render(){
          return(
              <div>
                  <h2>UserName-{this.state.users.name}</h2>
                  <h2>Title-{this.state.posts.title}</h2>
                  <h2>Body-{this.state.posts.body}</h2>
                  <h3>Comments:</h3>
                  <ul>
                      {
                          this.state.comments.map((user)=>{
                              return(
                                  <li key={user.id}>{user.body}</li>
                              )
                          })
                      }
                  </ul>
                  <h2><Link to={`/users/${this.state.users.id}`}>More posts of Author:{this.state.users.name}</Link></h2>

                </div>

          )

      }
    
}

export default PostShow