// Write your code here

import {Component} from 'react'
import MovieItem from '../MovieItem'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    // console.log(moviesList)
    return (
      <div className="prime-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="banner-image"
        />
        <MovieItem moviesListDetails={moviesList} />
      </div>
    )
  }
}
export default PrimeVideo
