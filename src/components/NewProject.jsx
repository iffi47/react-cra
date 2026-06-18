import Button from "./Button.jsx";
import Input from "./Input.jsx";
import { useState } from "react";

export default function NewProject({ handleNewProjects, cancelAddition }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    createdAt: "",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    let data= {
      [name]: value,
      id: Math.random()
    }
    setProject((prevProject) => {
      return {
        ...prevProject,
        ...data
      };
    });
  }

  function handleOnSave(event) {
    //Validation
    if(!project.title || !project.description || !project.createdAt){
      
    }
    event.preventDefault();
    handleNewProjects({ ...project });
    setProject({
    title: "",
    description: "",
    createdAt: "",
  })
  }

  return (
    <section className=" mx-auto max-w-3xl">
      <div className="mb-8 border-b border-black pb-5">
        <h2 className="section-title">Create New Project</h2>
        <p className="section-copy mt-2">
          Add the project details and keep the workspace clean and focused.
        </p>
      </div>

      <form
        className="space-y-1"
        onChange={handleFormChange}
        onSubmit={handleOnSave}
      >
        <Input
          required
          label="Project Title"
          name="title"
          placeholder="Enter title"
          value={project.title}
        />
        <Input
          required
          label="Project Description"
          name="description"
          placeholder="Enter description"
          textarea
          value={project.description}
        />
        <Input
          required
          label="Project Due Date"
          name="createdAt"
          placeholder="Select Date"
          type="date"
          value={project.createdAt}
        />

        <menu className="flex items-center justify-end gap-3 border-t border-black pt-5">
          <li>
            <Button variant="ghost">Cancel</Button>
          </li>
          <li>
            <Button type="submit">Save</Button>
          </li>
        </menu>
      </form>
    </section>
  );
}
