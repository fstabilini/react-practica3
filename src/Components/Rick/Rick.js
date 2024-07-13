import React from "react";

export default function Rick({ rickDataProp }) {
  return (
    <div>
      <div className="card-container">
        {rickDataProp.map((character) => (
          <div>
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <img src={character.image} alt={character.name}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
