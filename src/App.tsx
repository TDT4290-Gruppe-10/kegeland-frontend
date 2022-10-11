import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PatientsPage, { patientsMenuItemskeys } from "./pages/patients/Patients";
import PatientPage, { patientMenuItemskeys } from "./pages/patient/Patient";
import NotFoundPage from "./pages/NotFound";
import LogIn from "./pages/Login/index";
import RegisterUser from "./pages/RegisterPage/index";
import ExerciseSessionPage, { exerciseMenuItemskeys } from "./pages/patient/Exercise/ExerciseSession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={"/"} element={<Navigate to={"/allpatients"} replace />} />
        <Route path={"/login"} element={<LogIn />} />
        <Route path={"/register"} element={<RegisterUser />} />
        {patientsMenuItemskeys.map((key1) => (
          <>
            <Route path={key1} element={<PatientsPage />} />
            <Route
              path={key1 + "/patient/:patientId/"}
              element={
                <Navigate to={"/" + key1 + "/patient/:patientId/overview"} />
              }
            />
            {patientMenuItemskeys.map((key2) => (
              <>
                {console.log(key1, key2)}

                <Route
                  path={key1 + "/patient/:patientId/" + key2}
                  element={<PatientPage />}
                />
                <Route
                  path={
                    key1 +
                    "/patient/:patientId/" +
                    key2 +
                    "/exercise/:exerciseId/*"
                  }
                  element={
                    <Navigate
                      to={
                        "/" +
                        key1 +
                        "/patient/:patientId/" +
                        key2 +
                        "/exercise/:exerciseId/graph"
                      }
                    />
                  }
                />
                {exerciseMenuItemskeys.map((key3) => (
                  <Route
                    path={
                      key1 +
                      "/patient/:patientId/" +
                      key2 +
                      "/exercise/:exerciseId/" +
                      key3
                    }
                    element={<ExerciseSessionPage />}
                  />
                ))}
              </>
            ))}
          </>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
