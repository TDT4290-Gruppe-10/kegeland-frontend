import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllPatientsPage from './pages/Patients/AllPatients';
import OverviewPatientPage from './pages/Patient/OverviewPatient';
import ExcerciseSessionPage from './pages/Patient/Excercise/ExcerciseSession';
import LowActivityPatients from './pages/Patients/LowActivityPatients';
import FemFitOverviewPage from './pages/Patient/FemFit';
import DefaultPatientsPage from './pages/Patients/Patients';

function App() {

  return (
    <Routes>
      <Route path="/*" element={<DefaultPatientsPage />} >
        <Route index element={<DefaultPatientsPage />} />
        <Route path="patient/:patientId/*" element={<OverviewPatientPage />} />
        <Route path="patient/:patientId/excercise/:excerciseId/*" element={<ExcerciseSessionPage />} />
      </Route>
    </Routes >
  );
}

export default App;

