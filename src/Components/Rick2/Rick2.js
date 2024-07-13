import React from "react";

export default function Rick2({ rick2DataProp }) {
  return (
    <div>
      <div className="card-container">
        {rick2DataProp.map((character) => (
          <div>
            <p>Name: {character.name}</p>
            <p>Type: {character.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
