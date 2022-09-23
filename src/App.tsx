import { arrayBuffer } from "stream/consumers";
import SidePanel from "./components/SidePanel";
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const menyItems = ["All patients", "! Low Activity", "FemFit Patients"];
  return (
    <ChakraProvider>
      <>
        <div>Hello</div>

        {SidePanel(menyItems, "All patients")}
      </>
    </ChakraProvider>
  );
}

export default App;
