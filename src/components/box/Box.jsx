import style from "./Box.module.css";

export default function Box({children}) {
  return (
   <div className={style.box}>
    {children}
   </div>
  );
}