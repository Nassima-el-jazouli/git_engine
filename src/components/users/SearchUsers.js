import React, { Component } from 'react'

export class SearchUsers extends Component {


    state = {
        search: 'Salam'
    }

    handleForm = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    searchUsers=(e)=>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }
  render() {
    const{search} = this.state;
    return (
    <form>
         <div className="form-group">
         <input onChange={this.handleForm} placeholder='Search users ...' id="search"type="text"className="form-control" />
         </div>
         <button className="btn btn-danger btn-block">Search</button>
    </form>
      
    )
  }
}

export default SearchUsers