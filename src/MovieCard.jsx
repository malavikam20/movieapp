import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => { // Destructuring props
  return (
    <div className="movie" key={imdbID}> {/*Key is required when rendering a list of elements */}
      <div>
        <p>{Year}</p> 
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        {/* If the poster is not available, use a placeholder image */}
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}
export default MovieCard;