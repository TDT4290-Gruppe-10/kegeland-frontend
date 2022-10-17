import ExerciseSessionPage from "./pages/patient/Exercise/ExerciseSession";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PatientsPage, { patientsMenuItemskeys } from "./pages/patients/Patients";
import PatientPage, { patientMenuItemskeys } from "./pages/patient/Patient";
import NotFoundPage from "./pages/NotFound";
import LogIn from "./pages/auth/LogInPage";
import RegisterUser from "./pages/auth/RegisterPage";
import RequireAuthPage from "./pages/auth/RequireAuthPage"

const RoutesRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={"/"} element={<Navigate to={"/allpatients"} replace />} />
                <Route path={"/login"} element={<LogIn />} />
                <Route path={"/register"} element={<RegisterUser />} />
                <Route element={<RequireAuthPage />}>
                    {patientsMenuItemskeys.map((key1) => (
                        <>
                            <Route path={key1} element={<PatientsPage />} />
                            {patientMenuItemskeys.map((key2) => (
                                <>
                                    <Route
                                        path={key1 + "/patient/:patientId/"}
                                        element={
                                            <Navigate to={key1 + "/patient/:patientId/overview"} />
                                        }
                                    />
                                    <Route
                                        path={key1 + "/patient/:patientId/" + key2}
                                        element={<PatientPage />}
                                    />
                                    <Route
                                        path={key1 + "/patient/:patientId/" + key2 + "/excercise/"}
                                        element={<ExerciseSessionPage />}
                                    />
                                </>
                            ))}
                        </>
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesRoute