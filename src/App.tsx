import ExcerciseSessionPage from './pages/patient/Excercise/ExcerxiseSession';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PatientsPage, { patientsMenuItemskeys } from "./pages/patients/Patients";
import PatientPage, { patientMenuItemskeys } from "./pages/patient/Patient";
import NotFoundPage from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path={'/'} element={<Navigate to={'/AllPatients'} replace />} />
        {patientsMenuItemskeys.map((key1) => (
          <>
            <Route path={key1} element={<PatientsPage />} />
            {patientMenuItemskeys.map((key2) => (
              <>
                {console.log(key1, key2)}
                <Route path={key1 + "/Patient/:patientId/"} element={<Navigate to={key1 + "/Patient/:patientId/Overview"} />} />
                <Route path={key1 + "/Patient/:patientId/" + key2} element={<PatientPage />} />
                <Route path={key1 + "/Patient/:patientId/" + key2 + "/Excercise/"} element={<ExcerciseSessionPage />} />
              </>
            ))}
          </>
        ))}
      </Routes >
    </BrowserRouter>
  );
}

export default App;
