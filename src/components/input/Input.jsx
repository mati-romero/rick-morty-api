import style from "./Input.module.css";

export default function Input({ 
    type="text", 
    maxLength=20, 
    placeholderText="",
    action
}) {

  const inputHandler = (e) => {
    action(e.target.value);
  }

  return (
    <input 
        type={type} 
        className={`${style.search}`}
        maxLength={maxLength}
        placeholder={placeholderText}
        onChange={inputHandler}
    />
  );
}