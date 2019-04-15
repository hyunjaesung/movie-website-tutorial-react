import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
  //          -> render() -> componentDidUpdate()
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    //_를 붙인이유는 리액트 자체 함수도 많아서 섞임방지
    const movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={movie.title}
          poster={movie.large_cover_image}
          key={movie.id} // 컴포넌트 key는 인덱스로 사용안하는게좋음 느림
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    // await는 callApi가 끝나는걸 기다리고 return value가 뭐든 movies에 넣음
    // await 에 있는 작업이 성공이든 실패든 끝나야 setState가 실행됨
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
      .then(potato => potato.json())
      .then(json => json.data.movies) // 대괄호없어서 그냥 바로 리턴해줌
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
