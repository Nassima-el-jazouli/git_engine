import axios from 'axios'
import React, { Component } from 'react'
import User from './User';
import SearchUsers from './SearchUsers';

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: [
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
  searchUsersFromGit = (data) => {
    if(data != ''){
        axios.get(`https://api.github.com/search/users?q=${data}`)
              .then(response => {
                    this.setState({
                      searchs: Response.data.items
                    })
                  console.log(response)
                })
        }
    }

  componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        <br />
            <div className='row my-2'>
            {this.state.users.map(user => (
                <div className="col col-md-4 col-lg-2 col-xs-10">
                    <User user={user} />
                </div>
            ))}
            </div>
      </div>
    )
  }
}

export default Users