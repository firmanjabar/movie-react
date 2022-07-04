import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'

export default class App extends Component {

  state = {
    data: [],
    search: '',
  }

  handleSearch = (search) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: search,
      };
    });
  }

  componentDidMount = () => {
    const urlFetch = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_MOVIE}&language=en-US&page=1`)
    urlFetch.then(res => {
      if (res.status === 200)
        return res.json()
    }).then(resJson => {
      this.setState({
        data: resJson.results
      })
    })
  }

  render() {
    return (
      <>
        <Navbar handleSearch={this.handleSearch} />
        <Routes>
          <Route path='/' element={<Movies
            movies={
              this.state.search
                ? this.state.data.filter((movie) =>
                  movie.title
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase())
                )
                : this.state.data
            }
          />}>
          </Route>
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </>
    )
  }
}
