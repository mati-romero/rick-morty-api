import { useEffect, useState } from "react";
import { Accordion, Loading, Modal, CardDetailView, Pagination } from "@/components";
import { getAllEpisodes } from "@/services/episodes";
import { getCharacterById } from "@/services/characters";
import { extractIds } from "@/utils/funtions";

export default function EpisodePage() {

  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [charactersByEpisode, setCharactersByEpisode] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const loadCharacters = async(episode) => {
    const episodeId = episode.id;

    if (charactersByEpisode[episodeId]) return;

    const ids = extractIds(episode.characters);
    const res = await getCharacterById(ids);

    setCharactersByEpisode(prev => ({
      ...prev,
      [episodeId]: res
    }));
  }

  const loadEpisodes = async() => {
    setLoading(true);
    const res = await getAllEpisodes();

    setEpisodes(res.results);
    setPage(res.info);
    setLoading(false);
  }

  const characterDetail = (character) => {
    setLoading(true);
    setSelectedCharacter(character);
    setOpen(true);
    setLoading(false);
  }

  useEffect(() => {
    loadEpisodes();
  }, []);

  return (
    <>
      {loading && <Loading size={200}/>}

      <Modal open={open} onClose={() => setOpen(false)}>
        <CardDetailView character={selectedCharacter} setLoading={setLoading}/>
      </Modal>

      <div className="">

        <Pagination 
          page={page} 
          setPage={setPage}
          setLoading={setLoading}
          setItems={setEpisodes}
        />

        {episodes.map((episode, index) => (
          <Accordion key={index} title={`${episode.episode} - ${episode.name}`} action={() => loadCharacters(episode)}>
            <p><strong>Air Date: </strong> {episode.air_date}</p>
            <hr />
            <h2>Characters</h2>

            {!charactersByEpisode[episode.id] && (
              <p>Loading characters...</p>
            )}

            {charactersByEpisode[episode.id] && (
              <ul>
                {charactersByEpisode[episode.id].map((c) => (
                  <li key={c.id} onClick={() => characterDetail(c)}>
                    {c.name}
                  </li>
                ))}
              </ul>
            )}
          </Accordion>
        ))}

        <Pagination 
          page={page} 
          setPage={setPage}
          setLoading={setLoading}
          setItems={setEpisodes}
        />
      </div>
    </>
  );
}