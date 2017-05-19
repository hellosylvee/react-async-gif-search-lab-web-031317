import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state={
      gifs: []
    }
  }

  //componentWillUpdate()
  // componentDidMount(){
  //   let url = "http://api.giphy.com/v1/gifs/search?q=icecream&api_key=dc6zaTOxFJmzC&limit=3"
  //   fetch(url)
  //   .then( res => res.json() ) //turns to json object
  //   .then(gifJSON => this.setState({ gifs: gifJSON.data.map(function(gif){ return gif.embed_url }) }) )
  // }
  handleGifSearch(query){
    let url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=3"
    console.log(url)
    fetch(url)
    .then( res => res.json() ) //turns to json object
    .then(gifJSON => this.setState({ gifs: gifJSON.data.map(function(gif){ return gif.images.fixed_height.url }) }) )
  }

  render(){
    return(
      <div className="row">
        < GifList gifs={this.state.gifs} />
        < GifSearch onSubmit={this.handleGifSearch.bind(this)}/>
      </div>
    )
  }
}
//onSubmit is a callback prop that will pass from parent to child(gif search)
