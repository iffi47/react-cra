import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({}) {
  return(
    <>
      <div className="m-auto p-auto text-center w-2/3">
        <img src={noProjectImage} alt="No project" className="w-[50%] h-[50%] object-contain mx-auto" />
        <h2 className="section-title">No Project Selected!</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <p className="mt-4">
          <Button variant="priamry" type="submit">Create a new project</Button>
        </p>
      </div>
    </>
  )
}