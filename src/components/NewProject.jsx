import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <section className=" mx-auto max-w-3xl">
      <div className="mb-8 border-b border-black pb-5">
        <h2 className="section-title">Create New Project</h2>
        <p className="section-copy mt-2">
          Add the project details and keep the workspace clean and focused.
        </p>
      </div>

      <form className="space-y-1">
        <Input label="Title" placeholder="Enter title" />
        <Input label="Description" placeholder="Enter description" textarea />
        <Input label="Due Date" type="date" />

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
