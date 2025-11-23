import style from "./CardDetailView.module.css";

export default function CardDetailView({character}) {

  return (
    <>
        <div className={style.content}>
            <img src={character.image} alt={character.name}></img>

            <h2>{character.name}</h2>

            <div className={style.cardDetailData}>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Gender:</strong> {character.gender}</p>

                { (character.type!="") && <p><strong>Type:</strong> {character.type}</p>}

                <p><strong>Origin:</strong> {character.origin?.name}</p>
                <p><strong>Location:</strong> {character.location?.name}</p>
            </div>
        </div>
    </>
  );
}