import '../styles/card.css';

export default function Card({name, src}) {
    return (
      <div className="card">
        <img
          src={src}
          alt={name}
        />
        <h3>{name}</h3>
      </div>
    );
}