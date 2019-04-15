import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      {/* jsx에서는 className이라고써야됨 */}
      <div className="Movie_Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie_Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
            // 그냥 써도 되지만 컴포넌트를 쓰는게 좀더 세련된방식
          ))}
        </div>
        <p className="Movie__Synosis">{synopsis}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

function MovieGenre({ genre }) {
  return <span className="Movie__Genre"> {genre} </span>;
}

function MoviePoster({ poster }) {
  return <img src={poster} alt="Movie Poster" className="Movie__Poster" />;
} // img 태그의 alt 속성은 이미지 주소가 틀리면 보여주는 내용

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

export default Movie;
