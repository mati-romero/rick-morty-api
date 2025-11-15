import { useEffect, useState } from "react";
import { getAllCharacters } from "@/services/characters";
import { Card, Pagination, Loading } from "@/components";

export default function CharacterPage() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCharacters = async() => {
    setLoading(true);
    const res = await getAllCharacters();

    setCharacters(res.results);
    setPage(res.info);
    setLoading(false);
  }

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      {loading && <Loading size={200}/>}

      <Pagination page={page} setCharacters={setCharacters} setPage={setPage} setLoading={setLoading}/>

      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4">
        {characters.map((char, index) => (
          <Card key={index} item={char}/>
        ))}
      </div>

      <Pagination page={page} setCharacters={setCharacters} setPage={setPage} setLoading={setLoading}/>
    </>
  );
  
}