import Button from "./Button";
import Tasks from "./Tasks";

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
     <Button
      onClick={onDelete}
      variant="ghost">
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
    <Tasks />
   </article>
  );
}
