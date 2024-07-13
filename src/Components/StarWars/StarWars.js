import React from "react";

export default function Starwars({ starWarsProp }) {
  return (
    <div>
      <div className="card-container">
        {starWarsProp.map((character) => (
          <div key={character.name} className="character-card">
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
