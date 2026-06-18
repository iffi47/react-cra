import Button from "./Button";

export default function ViewProject({ project, onDelete }) {
  const formattedDate = new Date(project.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <article className="page-panel mx-auto max-w-4xl">
      <header className="mb-6 flex flex-col gap-5 border-b border-black pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-normal text-stone-500">
            Project Details
          </p>
          <h1 className="section-title text-3xl">{project.title}</h1>
          <p className="mt-2 text-sm font-semibold uppercase text-stone-500">
            Due {formattedDate}
          </p>
        </div>
        <Button onClick={onDelete} variant="ghost">
          Delete
        </Button>
      </header>

      <section className="border-b border-black pb-8">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-normal text-stone-950">
          Description
        </h2>
        <p className="section-copy whitespace-pre-wrap text-base leading-7">
          {project.description}
        </p>
      </section>

      <section className="pt-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Tasks</h2>
            <p className="section-copy mt-1">
              Keep track of the next steps for this project.
            </p>
          </div>
          <Button variant="secondary">Add Task</Button>
        </div>

        <div className="border border-black bg-stone-50 px-5 py-8 text-center shadow-[4px_4px_0_0_#000]">
          <p className="font-semibold uppercase text-stone-950">
            No tasks added yet
          </p>
          <p className="section-copy mt-2">
            Add your first task when you are ready to break this project down.
          </p>
        </div>
      </section>
    </article>
  );
}
