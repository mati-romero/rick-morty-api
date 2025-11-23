import { Button } from "@/components";

export default function Pagination({ page, setLoading, setItems, setPage }) {

  const loadPage = async(url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Page not found");
    return await response.json();
  }

  const changePage = async(url=null) => {
    if(!url) return null;

    setLoading(true);
    const res = await loadPage(url);

    setItems(res.results);
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