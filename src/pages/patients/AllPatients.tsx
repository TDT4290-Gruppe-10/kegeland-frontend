import { useLocation, useNavigate } from "react-router-dom";
import { patientsMenuItemskeys } from "./Patients";

function AllPatientsPage() {
    const navigation = useNavigate()
    const handleChangePath = () => {
        const path = 'Patient/:p1I/Overview'
        navigation(path)
    }

    return (
        <h1 onClick={handleChangePath} >All Patients page</h1>
    );
}

export default AllPatientsPage;