import { useEffect, useState } from "react";
import style from "./Modal.module.css";

export default function Modal({ open, onClose, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      // abrir animación
      setTimeout(() => setShow(true), 10);
    } else {
      // cerrar animación
      setShow(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300 
        ${show ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl p-6 shadow-xl max-w-md w-full transform transition-all duration-300 
          ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${style.modal}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
            <button
                className={`text-xl font-bold ${style.close}`}
                onClick={onClose}
            >X</button>
        </div>

        {children}

      </div>
    </div>
  );
}
