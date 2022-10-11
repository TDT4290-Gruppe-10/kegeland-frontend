import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import SidePanel from "../../components/SidePanel";
import { getTextFromkey, menuItemsType } from "../../utils/Things";
import AllExcersies from "./AllExercises";
import FemFitOverviewPage from "./FemfitOverview";
import OverviewPatientPage from "./OverviewPatient";


export const patientMenuItems: menuItemsType = {
    overview: "Overview",
    allexcersies: "All Excercises",
    femfitexcersies: "Femfit Excercises",
}

export const patientMenuItemskeys = Object.keys(patientMenuItems)

const PatientPage = () => {
    const pathname = useLocation().pathname.split('/')
    const activePage = pathname.pop() ?? patientMenuItemskeys[0]
    const navigate = useNavigate()
    const handleChangePath = (menuItem: string) => {
        return pathname.join('/') + '/' + menuItem
    }
    const handleBack = () => {
        return '/' + pathname[1]
    }
    return (
        <div className="container">
            {SidePanel(patientMenuItems, activePage, handleChangePath, true, handleBack)}
            {Header(getTextFromkey(patientMenuItems, activePage))}
            <div className="content">
                {activePage === patientMenuItemskeys[0] ? <OverviewPatientPage /> : <></>}
                {activePage === patientMenuItemskeys[1] ? <AllExcersies /> : <></>}
                {activePage === patientMenuItemskeys[2] ? <FemFitOverviewPage /> : <></>}
            </div>
        </div>
    )
}


export default PatientPage;