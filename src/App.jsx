import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [userProjects, setUserProjects] = useState({
    projects: [],
    selectedProject: undefined,
  });

  function handleProjects(project) {
    setUserProjects((prev) => {
      return {
        ...prev,
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

  return (
    <main className="app-shell">
      <div className="app-layout">
        <Sidebar onStartAddProject={handleStartAddProject} projects={userProjects.projects} />
        <section className="flex-1 px-4 py-8 md:px-10 md:py-12">
         {userProjects.selectedProject===null && <NewProject handleNewProjects={handleProjects}  />}
          {userProjects.selectedProject===undefined &&  <NoProject onStartAddProject={handleStartAddProject}  />}
        </section>
      </div>
    </main>
  );
}

export default App;
