import Member from "../Member";
import "./Team.css";
const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secundary }}>
      <h3 className="name" style={{ borderColor: props.primary }}>
        {props.name}
      </h3>
      <Member />
    </section>
  );
};
export default Team;
