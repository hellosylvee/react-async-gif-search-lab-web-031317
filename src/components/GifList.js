import React from 'react'

export default function GifList(props){
  const listItems = props.gifs.map( (url, i) => <li key={i}><img src={url}/></li> )
  // console.log(listItems)
  return(

      <div className="col-md-4 col-md-offset-3">
        <ul>
          {listItems}
        </ul>
      </div>

  )
}
