import { useEffect, useState } from "react";
import { getAllLocations } from "@/services/locations";
import { Table, Loading } from "@/components";

export default function LocationPage() {

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([]);

  const columns = ["name", "type", "dimension", "action"];

  const loadLocations = async() => {
    setLoading(true);
    const res = await getAllLocations();
    setLocations(res.results);
    setPage(res.info);
    setLoading(false);
  }

  useEffect(() => {
    loadLocations();
  }, []);

  return (
    <>
      {loading && <Loading size={200}/>}

      <Table 
        headers={columns} 
        data={locations} 
        setData={setLocations}
        page={page}
        setPage={setPage}
        setLoading={setLoading}
      />
    </>
  );
}