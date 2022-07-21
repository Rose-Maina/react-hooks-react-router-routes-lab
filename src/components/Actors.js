import React from "react";
import { actors } from "../data";

 
function Actors() {
  const actorz = actors.map((actor) =>(
    <div key={actor.name}>
      <h1>Name: {actor.name}</h1>
      <ul>
        Movies:{actor.movies.map((mov) =>(
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
      <h1>Actors Page</h1>
      </div>{actorz}<div>

    </div>
  </div>
  )
}

export default Actors;