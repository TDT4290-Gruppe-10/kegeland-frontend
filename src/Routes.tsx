import ExerciseSessionPage from "./pages/patient/Exercise/ExerciseSession";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientsPage from "./pages/patients/Patients";
import PatientPage from "./pages/patient/Patient";
import NotFoundPage from "./pages/NotFound";
import LogIn from "./pages/auth/LogInPage";
import RegisterUser from "./pages/auth/RegisterPage";
import RequireAuthPage from "./pages/auth/RequireAuthPage";

const RoutesRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={"/login"} element={<LogIn />} />
        <Route path={"/register"} element={<RegisterUser />} />
        <Route element={<RequireAuthPage />}>
          <Route path={"/"} element={<PatientsPage />} />
          <Route path={"patient/:patientId"} element={<PatientPage />} />
          <Route
            path={"/patient/:patientId/exercise/:exerciseId"}
            element={<ExerciseSessionPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoute;
