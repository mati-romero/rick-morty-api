import React from "react";
import style from "./Table.module.css";
import { Pagination, Button } from "@/components";
import { useNavigate } from "react-router-dom";

export default function Table({ headers, data, setData, page, setPage, setLoading }) {

const navigate = useNavigate();

  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;

  const goToDetail = (name, id) => {
    navigate(`/location/${name}`, {
        state: { id: id }
    });
  };

  return (
    <>
        <Pagination 
            page={page} 
            setPage={setPage}
            setLoading={setLoading}
            setItems={setData}
        />
        <div className={style.tableContainer}>
            <table border="1" cellPadding="8" className={style.tableCustom}>
            <thead>
                <tr>
                {headers.map((header) => (
                    <th key={header} style={{ textTransform: "capitalize" }}>
                    {header}
                    </th>
                ))}
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => (
                <tr key={index}>
                    {headers.map((key) => (
                    <td key={key}>
                        {key === "action" ? (
                            <Button
                                text={"Residents"}
                                onClick={() => goToDetail(item.name, item.id)}
                            />
                            ) : (
                                item[key]
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  );
}
