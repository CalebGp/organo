import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  // const times2 = [
  //   "Programação",
  //   "Front-End",
  //   "Data Science",
  //   "Devops",
  //   "UX e Design",
  //   "Mobile",
  //   "Inovação e Gestão",
  // ];
  const teams = [
    {
      name: "Programação",
      primary: "#57C278",
      secundary: "#D9F7E9",
    },
    {
      name: "Front-end",
      primary: "#82CFFA",
      secundary: "#E8F8FF",
    },
    {
      name: "Data-science",
      primary: "#A6D157",
      secundary: "#F0F8E2",
    },
    {
      name: "Dev-ops",
      primary: "#E06B69",
      secundary: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primary: "#DB6EBF",
      secundary: "#FAE9F5",
    },
    {
      name: "Mobile",
      primary: "#FFBA05",
      secundary: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primary: "#FF8A29",
      secundary: "#FFEEDF",
    },
  ];
  const [collaborators, setCollaborators] = useState([]);
  const onSubmit = (c) => {
    console.log(c);
    setCollaborators([...collaborators, c]);
    console.log(collaborators);
  };
  return (
    <div className="App">
      <Banner />
      <Form onSubmit={(c) => onSubmit(c)} />
      {teams.map((t) => (
        <Team
          key={t.name}
          name={t.name}
          primary={t.primary}
          secundary={t.secundary}
        />
      ))}
    </div>
  );
}

export default App;
