import React from "react";

export default function Rick4({ rick4DataProp }) {
  return (
    <div>
      <div className="card-container">
        {rick4DataProp.map((character) => (
          <div>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
