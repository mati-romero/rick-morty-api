import { useState } from "react";
import style from "./Card.module.css";
import { Modal, CardDetailView } from "@/components";

export default function Card({item}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CardDetailView id={item.id}/>
      </Modal>

      <div key={item.id} className={`${style.card}`} onClick={() => setOpen(true)}>
          <img src={item.image} alt={item.name} className="rounded-md" />
          <h3>{item.name}</h3>
          <p>{item.status} - {item.species}</p>
      </div>
    </>
  );
}
