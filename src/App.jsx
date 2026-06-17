import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="app-shell">
      <div className="app-layout">
        <Sidebar />
        <section className="flex-1 px-4 py-8 md:px-10 md:py-12">
          {/* <NewProject /> */}
          <NoProject/>
        </section>
      </div>
    </main>
  );
}

export default App;
