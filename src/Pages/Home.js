import React, { Component } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import Slider from "../components/Slider";
import { JumbotronC } from "../components/JumbotronC";


const Div = styled.div`
  margin: 0 auto;
width:90%; 
  overflow: none;
  .movie {
    display: flex;
    flex-direction: column;
    width: 250px;

    cursor: pointer;

    img {
      border-radius:12px;
    }
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  h3 {
    border: 1px solid none;
    padding: 10px 15px;
    margin: 10px 0;
    display: inline-block;
    border-radius: 3px;
    display:block;
    background:#FFC872;
  }
  h4{font-weight:800;
  font-size:20px}
  p{font-size:20px}
  .vote{
    position:absolute;
    top:0;
    padding:3px 7px;
    box-shadow: 0 20px 20px 20px rgba(0, 0, 0, 0.2);
    border-radius:5px;
  }
  .date{
    font-weight:thin;
    font-size:15px;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;
export class Home extends Component {
  state = { popularMovies: [],
    trendMovies:[] };

  getPopularMovies=async()=>{
    console.log(process.env);
    await fetch(
`      https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ popularMovies: data.results });
      });
  }
   getTrendingMovies=async()=>{
    await fetch(
      `      https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1` )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ trendMovies: data.results });
      });
  }


  async componentDidMount() {
    await this.getTrendingMovies();
   await this.getPopularMovies();
  }
 

  render() {
    return (
      <Div>
        
        <JumbotronC/>
        <h3>Populer Filmler</h3>
        <Slider movies={this.state.popularMovies} setId={this.props.setId} />
        <h3>Trend Filmler</h3>
        <Slider movies={this.state.trendMovies} setId={this.props.setId} />
      </Div>
    );
  }
}

export default Home;
