import React, { Component } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const Div = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  .background {
    width: 100%;
    height: 60vh;
    position: absolute;
    overflow: hidden;
    background: linear-gradient(to bottom, #000, transparent, #000);
  }

  .backdrop {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
    overflow: hidden;
    object-fit: cover;
    object-position: center;
  }
  .poster {
    height: 400px;
    margin: 40px 40px 20px 40px;
    border: 5px solid white;
    z-index: 1;
  }
  .info {
    display: flex;
    color: white;
    width: 100%;
    height: 70vh;
    justify-content: center;
    z-index: 100;
  }
  p {
    padding: 20px 0;
  }
  .detail-poster {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  }
  .content-info {
    width: 50%;
    margin-top: 40px;
    z-index: 100;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 500px) {
    .info {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    .category {
      display: none;
    }
    .poster {
      height: 300px;
      border: 5px solid white;
      z-index: 1;
    }
    .info {
      width: 100%;
      height: 150vh;
    }
    .content-info{display:flex;
    flex-direction:column;
  margin:0 auto;}
  }
`;
export class MovieInfo extends Component {
  state = {
    movie: [],
    trailer: [],
  };
  async getTrailer() {
    await fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.id +
        "/videos?api_key=c377a4de61abbc33e2fbb5bc071c6537&language=en-US"
    )
      .then((data) => data.json())
      .then((data) => this.setState({ trailer: data.results }));
    console.log(this.state.trailer);
  }
  async componentDidMount() {
    await fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.id +
        "?api_key=c377a4de61abbc33e2fbb5bc071c6537&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movie: data });
      });
    await this.getTrailer();
  }
  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: window.innerHeight > 750 ? 300 : window.innerHeight / 3,
      width: window.innerHeight > 750 ? 500 : window.innerHeight / 2,
      playerVars: {
        autoplay: 0,
      },
    };
    const { poster_path, backdrop_path, title, overview, genres } =
      this.state.movie;
    return (
      <Div>
        <div className="background">
          {backdrop_path && (
            <img
              src={"http://image.tmdb.org/t/p/w1280/" + backdrop_path}
              alt="img"
              className="backdrop"
            />
          )}
        </div>
        <div className="info">
          <div></div>
          <div className="detail-poster">
            {poster_path && (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                className="poster"
                alt="img"
              />
            )}
            <span className="category">
              <h2>Categories</h2>
              {genres &&
                this.state.movie.genres.map(
                  (genre, key) =>
                    genre.name + "," /* + (key!=genres.lenght&& ",")  */
                )}
            </span>
          </div>
          <div className="content-info">
            <div>
              <h2>{title}</h2>
              <p>{overview}</p>
            </div>
            <div style={{ alignSelf: "center" }}>
              <YouTube
                videoId={
                  this.state.trailer
                    ? this.state.trailer.length
                      ? this.state.trailer[0].key
                      : "-"
                    : "-"
                }
                opts={opts}
                onReady={this._onReady}
              />
            </div>
          </div>
        </div>
      </Div>
    );
  }
}

export default MovieInfo;
