import style from "./Button.module.css";

export default function Button({ type="button", text, disabled=false, onClick}) {
  return (
    <button 
      type={type} 
      className={`${style.simple}`}
      disabled={disabled}
      onClick={onClick}
      >{text}</button>
  );
}