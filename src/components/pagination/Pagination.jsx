import { Button } from "@/components";
import { changeCharacterPage } from "@/services/characters";

export default function Pagination({ page, setLoading, setCharacters, setPage }) {

  const changePage = async(url=null) => {
    if(!url) return null;

    setLoading(true);
    const res = await changeCharacterPage(url);

    setCharacters(res.results);
    setPage(res.info);
    setLoading(false);
  }

  return (
    <div className="flex justify-between items-center w-full py-4">
        <Button text={"<"} disabled={!page?.prev} onClick={() => changePage(page?.prev)}/>
        <Button text={">"} disabled={!page?.next} onClick={() => changePage(page?.next)}/>
    </div>
  );
}