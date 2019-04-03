import React, { Component } from 'react'
const searchStyle={
    backgroundColor:'#b8bec6'
}
export class Search extends Component {

  render() {
    return (
      <form >
        <input style={searchStyle} type="text" placeholder="Search..." />
      </form>
    )
  }
}

export default Search
