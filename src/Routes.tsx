import ExerciseSessionPage, { exerciseMenuItemskeys} from "./pages/patient/Exercise/ExerciseSession";
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
                    {patientsMenuItemskeys.map((patientsMenuKey) => (
                        <>
                            <Route path={patientsMenuKey} element={<PatientsPage />} />
                            {patientMenuItemskeys.map((patientMenuKey) => (
                                <>
                                    <Route
                                        path={patientsMenuKey + "/patient/:patientId/"}
                                        element={
                                            <Navigate to={patientsMenuKey + "/patient/:patientId/overview"} />
                                        }
                                    />
                                    <Route
                                        path={patientsMenuKey + "/patient/:patientId/" + patientMenuKey}
                                        element={<PatientPage />}
                                    />
                                    <Route
                                        path={patientsMenuKey + "/patient/:patientId/" + patientMenuKey + "/exercise/:exerciseId"}
                                        element={<Navigate to={patientsMenuKey + "/patient/:patientId/" + patientMenuKey + "/exercise/:exerciseId/overview"} />}
                                    />
                                    {exerciseMenuItemskeys.map((exerciseMenuKey) => (
                                   <Route
                                        path={patientsMenuKey + "/patient/:patientId/" + patientMenuKey + "/exercise/:exerciseId/" + exerciseMenuKey}
                                        element={<ExerciseSessionPage />}
                                    />
                                    ))}
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