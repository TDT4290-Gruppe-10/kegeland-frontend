import { useLocation, useNavigate } from "react-router-dom";
import { patientsMenuItemskeys } from "./Patients";

function AllPatientsPage() {
    const navi = useNavigate()
    const pathname = useLocation().pathname.split('/')
    const firstPath: string = pathname[1] === '' ? patientsMenuItemskeys[0] : pathname[1]
    const nav = () => {

        navi(firstPath + '/patient/:p1I' + "/Overview")
    }

    return (
        <h1 onClick={nav} >All Patients page</h1>
    );
}

export default AllPatientsPage;