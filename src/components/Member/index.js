import "./Member.css";
const Member = (props) => {
  return (
    <div className="member">
      <div
        className="header"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img src={props.image} alt={props.image} />
      </div>
      <div className="bottom">
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
      </div>
    </div>
  );
};
export default Member;
