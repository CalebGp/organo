import "./Dropdownlist.css";
const Dropdownlist = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        required={props.required}
        onChange={(e) => props.onSelect(e.target.value)}
        value={props.value}
      >
        {props.options.map((item) => (
          <option key={item}> {item}</option>
        ))}
      </select>
    </div>
  );
};
export default Dropdownlist;
