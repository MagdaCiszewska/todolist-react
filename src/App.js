import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Container from "./Container";

const tasks = [
  { id: 1, content: "wyjść z psem", done: true },
  { id: 2, content: "pouczyć się", done: false },
];

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDone = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

  return (
    <Container>
      <main className="container">
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraButtons={
            <Buttons
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              toggleHideDone={toggleHideDone}
            />
          }
        />
      </main>
    </Container>
  );
}

export default App;
