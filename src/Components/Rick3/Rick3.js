import React from "react";

export default function Rick3({ rick3DataProp }) {
  return (
    <div>
      <div className="card-container">
        {rick3DataProp.map((character) => (
          <div>
            <p>Name: {character.name}</p>
            <p> Episode: {character.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
