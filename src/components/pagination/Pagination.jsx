import { useEffect, useState } from "react";
import { Button, Input, Select } from "@/components";
import { changeCharacterPage, getLeakedCharacters } from "@/services/characters";
import {status, genders} from "./utils/filters";

export default function Pagination({ page, setLoading, setCharacters, setPage }) {

  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: ""
  });

  const changePage = async(url=null) => {
    if(!url) return null;

    setLoading(true);
    const res = await changeCharacterPage(url);

    setCharacters(res.results);
    setPage(res.info);
    setLoading(false);
  }

  const changeFilter = async() => {
    setLoading(true);
    const res = await getLeakedCharacters(filters);

    setCharacters(res.results);
    setPage(res.info);
    setLoading(false);
  }

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  //useEffect
  useEffect(() => {
    changeFilter();
  },[filters]);

  return (
    <div className="flex justify-between items-center w-full py-4">
        <Input placeholderText={"Name.."} action={e => updateFilter("name",e)}/>
        <Select items={status} action={e => updateFilter("status",e)}/>
        <Select items={genders} action={e => updateFilter("gender",e)}/>
        <>
          <Button text={"<"} disabled={!page?.prev} onClick={() => changePage(page?.prev)}/>
          <Button text={">"} disabled={!page?.next} onClick={() => changePage(page?.next)}/>
        </>
    </div>
  );
}