import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Container from "./Container";


function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const [tasks, setTasks] = useState(
    [
    { id: 1, content: "wyjść z psem", done: true },
    { id: 2, content: "pouczyć się", done: false },
  ]
  );

  const toggleHideDone = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter( task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const markAllTaskDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})))
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks, 
      {content: newTaskContent,
        done: false,
      id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id + 1 }
     ])
  }

  return (
    <Container>
      <main className="container">
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask}/>} />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone}/>}
          extraButtons={
            <Buttons
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
              toggleHideDone={toggleHideDone}
              markAllTaskDone={markAllTaskDone}
            />
          }
        />
      </main>
    </Container>
  );
}

export default App;
