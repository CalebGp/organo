import { useState } from "react";
import Button from "../Button";
import Dropdownlist from "../DropdownList";
import Textfield from "../TextField";
import "./Form.css";
const Form = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Dev-ops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, role, image, team });
    console.log("form submitted =>", name, role, image, team);
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card</h2>
        <Textfield
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          text={name}
          handleChange={(e) => setName(e)}
        />
        <Textfield
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          text={role}
          handleChange={(e) => setRole(e)}
        />
        <Textfield
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          text={image}
          handleChange={(e) => setImage(e)}
        />
        <Dropdownlist
          required={true}
          label="Time"
          options={times}
          onSelect={(e) => setTeam(e)}
          value={team}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
export default Form;
