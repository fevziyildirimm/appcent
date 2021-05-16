import React, { Component } from "react";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router-dom";
import MovieInfo from "./Pages/MovieInfo";
import About from "./Pages/About";
import "./App.css"


const Div = styled.div`
  display: flex;
  flex-direction: column;

  height:100vh;
  color:#fff;

  .content {
    flex: 1;
    
  }


`;

export class App extends Component {
  state={
    movieId:""
  }
  setId=(id)=>{
this.setState({movieId:id})
  }
  render() {
    return (
      <Div>
        <TopBar />
          <Switch>
        <div className="content">
            <Route exact path="/"  >
              <Home setId={this.setId}/>
            </Route>
            <Route path="/info" >
              <MovieInfo id={this.state.movieId}/>
            </Route>
            <Route path="/about" component={About} />
        </div>
          </Switch>
        <Footer />
      </Div>
    );
  }
}

export default App;
