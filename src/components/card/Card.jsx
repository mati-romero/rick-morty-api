import style from "./Card.module.css";

export default function Card({item}) {
  return (
    <div key={item.id} className={`${style.card}`}>
        <img src={item.image} alt={item.name} className="rounded-md" />
        <h3>{item.name}</h3>
        <p>${item.status} - ${item.species}</p>
    </div>
  );
}
