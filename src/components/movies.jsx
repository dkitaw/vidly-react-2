import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    console.log("Delete Movie", movie);
    this.setState(prevState => {
      const movies = prevState.movies.filter(m => m._id !== movie._id);
      return { movies };
    });
  };

  renderMoviesCount = () => {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;

    return <p>Showing {count} movies in the database.</p>;
  };

  renderMoviesTable = () => {
    if (this.state.movies.length === 0) return;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <>
        {this.renderMoviesCount()}
        {this.renderMoviesTable()}
      </>
    );
  }
}

export default Movies;
