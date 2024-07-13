import "./Disney.css";

export default function Disney({ disneyDataProp }) {
  return (
    <div>
      <div className="card-container">
        {disneyDataProp.map((personaje) => (
          <div key={personaje._id} className="character-card">
            <h2>{personaje.name}</h2>
            <img src={personaje.imageUrl} alt={personaje.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
