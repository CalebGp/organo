import Member from "../Member";
import "./Team.css";
const Team = (props) => {
  return (
    props.members.length > 0 && (
      <section className="team" style={{ backgroundColor: props.secundary }}>
        <h3 className="name" style={{ borderColor: props.primary }}>
          {props.name}
        </h3>

        <div className="members">
          {props.members.map((m) => (
            <Member
              key={m.name}
              backgroundColor={props.primary}
              image={m.image}
              name={m.name}
              role={m.role}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Team;
