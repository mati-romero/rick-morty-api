import { useEffect, useState } from "react";
import { RoundedImage, Loading } from "@/components";
import { getCharacterById } from "@/services/characters";

export default function HomePage() {

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const loadPage = async() => {
    setLoading(true);
    const randomID = randomInt(1,800);
    const res = await getCharacterById([randomID, randomID+10, randomID+20]);
    setCharacters(res);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div>

      {loading && <Loading size={200}/>}

      <img 
        src="img/r&m.svg" 
        alt="Rick" 
        className="max-w-[400px] w-full mx-auto"
      />
      <hr />

      <div className="grid grid-cols-12 gap-4 my-5">
        
        <div className="col-span-12">
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4">
            {characters.map((char, index) => (
              <RoundedImage
                key={index}
                src={char.image}
                alt={char.name}
                size={100}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12">
          <p>
            Find all the characters from the Rick and Morty universe, from the most well-known protagonists to the rarest and most obscure secondary characters from every dimension.
          </p>
        </div>
        <div className="col-span-6">
          <p>
            Explore every episode of Rick and Morty, from the very first adventure to the latest multiverse chaos.
            Find detailed information about each episode, including titles, air dates, seasons, and the characters that appear in them.
          </p>
        </div>
        <div className="col-span-6">
          <img 
            src="img/r&m2.svg" 
            alt="Rick" 
            className="max-w-[400px] w-full mx-auto"
          />
        </div>
        <div className="col-span-12">
            <p>
              Travel across the many locations of the Rick and Morty universe, from familiar planets to the strangest and most dangerous dimensions.
              Discover where characters come from, where they are currently located, and how each place connects within the multiverse.
            </p>
        </div>
      </div>

      <img 
        src="img/r&m3.svg" 
        alt="Rick" 
        className="max-w-[400px] w-full mx-auto"
      />
    </div>
  );
}