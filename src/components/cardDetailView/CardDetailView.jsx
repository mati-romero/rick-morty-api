import { useState, useEffect } from "react";
import style from "./CardDetailView.module.css";
import { getCharacterById } from "@/services/characters";
import { Loading } from "@/components";

export default function CardDetailView({id}) {

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCharacter = async(id) => {
    setLoading(true);
    const res = await getCharacterById(id);
    setCharacter(res);
    setLoading(false);
  }

  useEffect(() => {
    if(id){
        loadCharacter(id);
    }
  }, [id]);
  return (
    <>
        {loading && <Loading size={200}/>}
        <div className={style.content}>
            <img src={character.image} alt={character.name}></img>

            <h2>{character.name}</h2>

            <div className={style.cardDetailData}>
                <p><strong>Status</strong> {character.status}</p>
                <p><strong>Species</strong> {character.species}</p>
                <p><strong>Gender</strong> {character.gender}</p>

                { (character.type!="") && <p><strong>Type</strong> {character.type}</p>}

                <p><strong>Origin</strong> {character.origin?.name}</p>
                <p><strong>Location</strong> {character.location?.name}</p>
            </div>
        </div>
    </>
  );
}