import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    console.log("Delete Movie", movie);
    this.setState(prevState => {
      const movies = prevState.movies.filter(m => m._id !== movie._id);
      return { movies };
    });
  };

  handleLike = movie => {
    this.setState(prevState => {
      const movies = [...prevState.movies];
      const index = movies.indexOf(movie);
      movies[index] = { ...movies[index] };
      movies[index].liked = !movies[index].liked;
      return { movies };
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
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
                <Like
                  liked={movie.liked}
                  onClick={() => this.handleLike(movie)}
                />
              </td>
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
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Movies;
