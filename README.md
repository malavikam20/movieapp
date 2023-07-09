## The Movie Search App is a React application that allows users to search for movies and displays the search results in real-time. It provides a user-friendly interface where users can enter their desired movie title and instantly see a list of movies that match their search query.

### Here is a quick go-through to see how the code works.

1. The code imports necessary dependencies and components, such as React, useState, useEffect, MovieCard, and SearchIcon. It also imports the App.css stylesheet.

2. The API_URL constant is defined, which holds the base URL of the OMDB API along with the API key.

3. The App component is defined as a functional component. It sets up state variables using the useState hook: searchTerm to store the user's search term and 
   movies to store the search results.

4. The searchMovies function is declared as an asynchronous function. It takes a title parameter representing the movie title to search for.

5. Inside the searchMovies function, an API request is made using the fetch function. The fetch function is called with the constructed URL that includes the 
   API_URL and the search term title as a query parameter. The await keyword is used to wait for the response to be resolved, and the response is stored in the 
   response variable.

6. The response is then parsed as JSON using the response.json() method, and the resulting data is stored in the data variable.

7. The setMovies function is called with data.Search to update the movies state with the search results.

8. The return statement defines the JSX structure of the component.

9. The input element is rendered, which allows users to enter a search term. The value of the input is controlled by the searchTerm state variable, and the 
   onChange event handler updates the searchTerm state whenever the input value changes.

10. The onKeyUp event handler is added to the input element to detect when the enter key is pressed. If the enter key is pressed (e.key === "Enter"), the 
   searchMovies function is called with the current search term.

11. The search icon image is rendered, and the onClick event handler is attached to it. When clicked, it calls the searchMovies function with the current search 
   term.

12. Conditional rendering is used to display either the movie cards or a "No movies found" message based on the length of the movies array.

That's a summary of how the code works! It sets up the necessary state variables, handles the API request, and provides user interactivity for searching movies using the input field and the search icon.
