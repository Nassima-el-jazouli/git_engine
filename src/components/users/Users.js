import axios from 'axios'
import React, { Component } from 'react'
import User from './User';

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: [
      {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
        repos_url: "https://api.github.com/users/mojombo/repos"
      },
      {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
        repos_url: "https://api.github.com/users/defunkt/repos"
      },
      {
        login: "pjhyett",
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
        repos_url: "https://api.github.com/users/pjhyett/repos"
      }
    ]
    }
  }

  getUsers = () => {
    axios.get('https://api.github.com/users')
        .then(response => {
             this.setState({
                users: response.data
             })
        })
  }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        <br /><br />
            <div className='row'>
            {this.state.users.map(user => (
                <div className="col col-md-4 col-lg-2 col-xs-10">
                    <User user={user}/>
                </div>
            ))}
            </div>
      </div>
    )
  }
}

export default Users