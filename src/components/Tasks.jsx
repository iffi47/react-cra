import Button from "./Button";
import NewTasks from "./NewTasks";

export default function Tasks({ addTask, deleteTask, tasks }) {
 return (
  <>
   <section className="pt-8">
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
     <div>
      <h2 className="section-title">Tasks</h2>
      <NewTasks
       addTask={addTask}
      />
      <p className="section-copy mt-1">
       Keep track of the next steps for this project.
      </p>
     </div>
     {/* <Button variant="secondary">Add Task</Button> */}
    </div>

    <div className="border border-black bg-stone-50 px-5 py-8 text-center shadow-[4px_4px_0_0_#000]">
     {tasks.length === 0 && (
      <p className="font-semibold uppercase text-stone-950">
       No tasks added yet
      </p>
     )}
     {tasks.map((task) => (
      <div
       className="mt-2 flex items-center justify-between gap-3 border border-black bg-white px-4 py-3 text-left"
       key={task.id}>
       <p className="section-copy">{task.text}</p>
       <Button
        onClick={() => deleteTask(task.id)}
        variant="ghost">
        Delete
       </Button>
      </div>
     ))}
    </div>
   </section>
  </>
 );
}
