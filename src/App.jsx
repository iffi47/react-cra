import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import ViewProject from "./components/ViewProject";
import { useState } from "react";

function App() {
  const [userProjects, setUserProjects] = useState({
    projects: [],
    selectedProject: undefined,
    tasks: [],
  });

  function handleProjects(project) {
    setUserProjects((prev) => {
      return {
        ...prev,
        selectedProject: project.id,
        projects: [...prev.projects, project],
      };
    });
  }

  function handleStartAddProject() {
    setUserProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }
  function handleCancelProject (){
    setUserProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    if (userProjects.selectedProject === id) {
      setUserProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
    }else{
    setUserProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }
  }

  function handleDeleteProject() {
    setUserProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
        tasks: prevState.tasks.filter(
          (task) => task.projectId !== prevState.selectedProject
        ),
      };
    });
  }

  const selectedProject = userProjects.projects.find(
    (project) => project.id === userProjects.selectedProject
  );
  function handleAddTask(text) {
    setUserProjects((prev) => {
      let data = {
        text: text,
        id: Math.random(),
        projectId: prev.selectedProject,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, data],
      };
    });
  }
  function handleDeleteTask(id) {
    setUserProjects((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProjectTasks = userProjects.tasks.filter(
    (task) => task.projectId === userProjects.selectedProject
  );

  return (
   <main className="app-shell">
    <div className="app-layout">
     <Sidebar
      onSelectProject={handleSelectProject}
      onStartAddProject={handleStartAddProject}
      projects={userProjects.projects}
      selectedProjectId={userProjects.selectedProject}
     />
     <section className="flex-1 px-4 py-8 md:px-10 md:py-12">
      {userProjects.selectedProject === null && (
       <NewProject
        handleNewProjects={handleProjects}
        handleCancel={handleCancelProject}
       />
      )}
      {userProjects.selectedProject === undefined && (
       <NoProject onStartAddProject={handleStartAddProject} />
      )}
      {selectedProject && (
       <ViewProject
        onDelete={handleDeleteProject}
        project={selectedProject}
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
        tasks={selectedProjectTasks}
       />
      )}
     </section>
    </div>
   </main>
  );
}

export default App;
