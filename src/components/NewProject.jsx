import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useState, useRef } from "react";

export default function NewProject({ handleNewProjects, handleCancel }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    createdAt: "",
  });
  const errorModal = useRef(null);

  function handleFormChange(event) {
    const { name, value } = event.target;
    let data = {
      [name]: value,
      id: Math.random(),
    };
    setProject((prevProject) => {
      return {
        ...prevProject,
        ...data,
      };
    });
  }

  function handleOnSave(event) {
    event.preventDefault();

    if (!project.title || !project.description || !project.createdAt) {
      errorModal.current.open();
      return;
    }

    handleNewProjects({ ...project });
    setProject({
      title: "",
      description: "",
      createdAt: "",
    });
  }

  return (
    <section className=" mx-auto max-w-3xl">
      <Modal
        ref={errorModal}
        title="Missing Project Details"
        actions={
          <Button onClick={() => errorModal.current.close()}>Okay</Button>
        }
      >
        <p className="section-copy">
          Please fill in the project title, description, and due date before
          saving.
        </p>
      </Modal>

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
        noValidate
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
            <Button onClick={handleCancel} variant="ghost">
              Cancel
            </Button>
          </li>
          <li>
            <Button type="submit">Save</Button>
          </li>
        </menu>
      </form>
    </section>
  );
}
