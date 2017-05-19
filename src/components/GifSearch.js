import React from 'react'
import GiflistContainer from '../containers/GifListContainer'

export default class GifSearch extends React.Component {
  constructor(){
    super()
    this.state={
      query: ""
    }
  }

  handleInputChange(e){
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.query)
    this.setState({
      query: ""
    })
  }

  render(){
    return(
      <div className="col-md-4">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>Search for gifs!</div>
          <input type="text" value={this.state.query} onChange={this.handleInputChange.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

//when submitted, it should invoke callbackprop with {this.state.query}
