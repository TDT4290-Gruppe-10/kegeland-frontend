import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllPatientsPage from './pages/Patients/AllPatients';
import OverviewPatientPage from './pages/Patient/OverviewPatient';
import ExcerciseSessionPage from './pages/Patient/Excercise/ExcerciseSession';
import LowActivityPatients from './pages/Patients/LowActivityPatients';
import FemFitOverviewPage from './pages/Patient/FemFitPatient';
import PatientsPage, { patientsMenuItemskeys } from './pages/Patients/Patients';
import PatientPage from './pages/Patient/Patient';

function App() {

  return (
    <Routes>
      <Route path="/*" element={<PatientsPage />} />
      {patientsMenuItemskeys.map((key) => (
        <>
          <Route path={key + "/patient/*"} element={<PatientPage />} />
          <Route path={key + "/patient/:patientId/*"} element={<PatientPage />} />
          <Route path={key + "/patient/:patientId/excercise/*"} element={<ExcerciseSessionPage />} />
        </>
      ))}
    </Routes >
  );
}

export default App;

