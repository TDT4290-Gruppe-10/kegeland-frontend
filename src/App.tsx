import { arrayBuffer } from "stream/consumers";
import SidePanel from "./components/SidePanel";
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import PatientsPage from "./pages/patients/Patients";
import PatientPage from "./pages/patient/Patient";

function App() {

  return (
    <BrowserRouter>
      <PatientPage />
    </BrowserRouter>
  );
}

export default App;
