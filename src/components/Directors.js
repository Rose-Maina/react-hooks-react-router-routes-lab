import React from "react";
import { directors } from "../data";

 
function Directors() {
  const directorz = directors.map((director) =>(
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
        <ul>
        Movies:{director.movies.map((mov,index) =>(
          <li key={mov}>
            {mov}
          </li>
      ))}</ul>
      <div>
      </div>
    </div>
  ))
  return (
    <div>
      <div>
      <h1>Directors Page</h1>
      </div>{directorz}<div>

    </div>
  </div>
  )
}

export default Directors;