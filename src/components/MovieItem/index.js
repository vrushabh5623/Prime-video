// Write your code here
// import React from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

class MovieItem extends Component {
  render() {
    const {moviesListDetails} = this.props

    const actionMovies = moviesListDetails.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )

    const comedyMovies = moviesListDetails.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )

    return (
      <div className="bg-main-container">
        <div className="bg-container">
          <h1 className="tr-head">Action Movies</h1>
          <MoviesSlider>
            {actionMovies.map(eachItem => (
              <div key={eachItem.id}>
                <Popup
                  trigger={
                    <button type="button" onClick={this.onactionBtn}>
                      <img src={eachItem.thumbnailUrl} alt="thumbnail" />
                    </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button
                        type="button"
                        className="close"
                        onClick={close}
                        data-testid="closeButton"
                      >
                        <IoMdClose />
                      </button>
                      <div className="player-wrapper">
                        <ReactPlayer
                          url={eachItem.videoUrl}
                          style={{
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '16/9',
                          }}
                          controls
                        />
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            ))}
          </MoviesSlider>
        </div>

        <div className="bg-container">
          <h1 className="tr-head">Comedy Movies</h1>
          <MoviesSlider>
            {comedyMovies.map(eachItem => (
              <div key={eachItem.id}>
                <Popup
                  trigger={
                    <button type="button" onClick={this.onactionBtn}>
                      <img src={eachItem.thumbnailUrl} alt="thumbnail" />
                    </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button
                        className="close"
                        onClick={close}
                        type="button"
                        data-testid="closeButton"
                      >
                        <IoMdClose />
                      </button>
                      <div className="player-wrapper">
                        <ReactPlayer
                          url={eachItem.videoUrl}
                          style={{
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '16/9',
                          }}
                          controls
                        />
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            ))}
          </MoviesSlider>
        </div>
      </div>
    )
  }
}

export default MovieItem
