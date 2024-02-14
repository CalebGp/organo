import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
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
  const [members, setMembers] = useState([]);
  const onSubmit = (m) => {
    setMembers([...members, m]);
    console.log(members);
  };
  return (
    <div className="App">
      <Banner />
      <Form onSubmit={(m) => onSubmit(m)} />
      {teams.map((t) => (
        <Team
          key={t.name}
          name={t.name}
          primary={t.primary}
          secundary={t.secundary}
          members={members.filter((m) => m.team === t.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
