import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getLocationById } from "@/services/locations";
import { getCharacterById } from "@/services/characters";
import { Box, Card, Loading } from "@/components";
import { extractIds } from "@/utils/funtions";

export default function LocationDetailPage() {

  const params = useLocation();
  const { id } = params.state || {};

  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadLocation = async() => {
    if(!id) return;
    
    setLoading(true);
    const res = await getLocationById(id);
    setLocation(res);
    const ids = extractIds(res.residents);
    const residentsOfLocation = await getCharacterById(ids);
    setResidents(residentsOfLocation);
    setLoading(false);
  }

  useEffect(() => {
    loadLocation();
  }, []);

  return (
    <>
      {loading && <Loading size={200}/>}
      <Box>
        <h3>{location?.name}</h3>
        <p><strong>Type</strong> {location?.type}</p>
        <p><strong>Dimension</strong> {location?.dimension}</p>
        <hr />
        <h3 className="mt-5">Residents</h3>

        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-4">
          {residents?.map((char, index) => (
            <Card key={index} item={char} setLoading={setLoading}/>
          ))}
        </div>
      </Box>
    </>
  );
}