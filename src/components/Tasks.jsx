import Button from "./Button";
import NewTasks from "./NewTasks";


export default function Tasks() {
  return(
    <>
      <section className="pt-8">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="section-title">Tasks</h2>
            <NewTasks/>
            <p className="section-copy mt-1">
              Keep track of the next steps for this project.
            </p>
          </div>
          {/* <Button variant="secondary">Add Task</Button> */}
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
    </>
  )
}