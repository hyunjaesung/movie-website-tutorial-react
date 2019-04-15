import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
  //          -> render() -> componentDidUpdate()
  state = {
    greeting: "hello!",
    movies: [
      {
        title: "Matirx",
        poster:
          "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
      },
      {
        title: "Avengers",
        poster:
          "https://upload.wikimedia.org/wikipedia/ko/thumb/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg/250px-%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg"
      },
      {
        title: "Captain Marvel",
        poster:
          "https://t1.daumcdn.net/movie/9633f50f32a34df2ae91dbac1203062e1551065947586"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies, // 이전것들 그대로 두고
          {
            title: "Transpotting",
            poster:
              "https://s-i.huffpost.com/gen/3388952/thumbs/o-CHANNEL-FOUR-FILMS-570.jpg?7"
          }
        ]
      });
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          // index는 우리가 제공하는 리스트의 숫자 의미 0부터 2까지 들어갈것
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
