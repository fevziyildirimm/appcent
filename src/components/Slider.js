import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import { FaStar } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

export class Slider extends Component {
  getDetail = async (id) => {
    await this.props.setId(id);
    window.location.href = "#/info";
  };
  render() {
    return (
      <div>
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          ssr
          partialVisbile
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          {this.props.movies.map((movie, key) => (
            <div
              key={movie.id}
              className="movie"
              onClick={() => this.getDetail(movie.id)}
            >
              <Image
                draggable={false}
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                style={{ width: "100%", height: "100%" }}
                alt={movie.poster_path}
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <div>
                <div className="vote">
                    <FaStar fontSize="24px" color="#FFC872" />
                    <p>{movie.vote_average}</p>
                  </div>
                  <p className="date">{movie.release_date}</p>

                  
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
