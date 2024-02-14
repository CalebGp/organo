import "./Textfield.css";
const Textfield = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  };
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.text}
        required={props.required}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default Textfield;
