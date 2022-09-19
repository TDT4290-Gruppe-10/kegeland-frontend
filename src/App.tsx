import { arrayBuffer } from "stream/consumers";
import SidePanel from "./components/SidePanel";

function App() {
  const menyItems = ["All patients", "! Low Activity", "FemFit Patients"]
  return (
    <>
      <div>Hello</div>

      {SidePanel(menyItems, "All patients")}
    </>
  );
}

export default App;
