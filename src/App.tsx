import { arrayBuffer } from "stream/consumers";
import SidePanel from "./components/SidePanel";
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import PatientsPage from "./pages/patients/Patients";

function App() {

  return (
    <BrowserRouter>
      <PatientsPage />
    </BrowserRouter>
  );
}

export default App;
