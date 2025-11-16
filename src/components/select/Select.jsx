import style from "./Select.module.css";

export default function Select({ 
    items,
    action
}) {

  const selectorHandler = (e) => {
    action(e.target.value);
  }

  return (
    <select className={`${style.selectCustom}`} onChange={e => selectorHandler(e)}>
        {
            items?.map((item) => (
             <option key={item.id} value={item.value}>{item.name}</option>
            ))
        }
    </select>
  );
}