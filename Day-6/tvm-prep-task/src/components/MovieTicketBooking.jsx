// // Task 3: Movie Ticket Booking Requirements: 
// // Display movie list Select movie Select seats Calculate total amount Show booking summary
import React, { useState } from "react";

const MovieTicketBooking = () => {
  const MovieList = [
    { id: 1, movieName: "Leo", price: 150, genre: "Action" },
    { id: 2, movieName: "Jailer", price: 120, genre: "Action/Drama" },
    { id: 3, movieName: "Vikram", price: 140, genre: "Action/Thriller" },
    { id: 4, movieName: "Master", price: 100, genre: "Action/Drama" },
    { id: 5, movieName: "96", price: 80, genre: "Romance" }
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [seats, setSeats] = useState(1);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const totalAmount = selectedMovie ? selectedMovie.price * seats: 0;

  return (
    <>
      <h1>Movie Ticket Booking System</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Price</th>
            <th>Genre</th>
            <th>Book Now</th>
          </tr>
        </thead>

        <tbody>
          {MovieList.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.movieName}</td>
              <td>{movie.price}</td>
              <td>{movie.genre}</td>
              <td>
                <button onClick={() => handleClick(movie)}>
                  Book Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMovie && (
        <div style={{ marginTop: "20px" }}>
          <h2>Booking Summary</h2>

          <p>
            <b>Movie:</b> {selectedMovie.movieName}
          </p>

          <p>
            <b>Price per ticket:</b> {selectedMovie.price}
          </p>

          <label>Seats: </label>
          <input type="number" value={seats} min="1" onChange={(e) => setSeats(e.target.value)}/>

          <p>
            <b>Total Amount:</b> {totalAmount}
          </p>

          <button onClick={() => alert(   `Booking Confirmed!\nMovie: ${selectedMovie.movieName} Seats: ${seats} Total: ${totalAmount}` ) }>
            Confirm Booking
          </button>
        </div>
      )}
    </>
  );
};

export default MovieTicketBooking;