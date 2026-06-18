import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useState, useRef } from "react";

export default function NewTasks({ handleNewTasks, handleCancel }) {
  const [task, setTask] = useState("");
  const errorModal = useRef(null);

  function handleFormChange(event) {
    setTask((prevProject) => {
      return event.target.value
    });
  }

  function handleOnSave(event) {
    event.preventDefault();

    if (!task) {
      errorModal.current.open();
      return;
    }

    handleNewTasks(task);
    setTask("");
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
        <h2 className="text-md font-semibold tracking-normal text-stone-950">Add New Task</h2>
      </div>

      <form
        className="space-y-1"
        onChange={handleFormChange}
        onSubmit={handleOnSave}
        noValidate
      >
        <Input
          required
          name="title"
          placeholder="Enter title"
          value={task}
        />
            <Button type="submit"  variant="ghost">Add Task</Button>
      </form>
    </section>
  );
}
