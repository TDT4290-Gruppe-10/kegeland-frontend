import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import { getTextFromkey, menuItemsType } from "../../utils/Things";
import FemFitOverviewPage from "./FemfitOverview";
import OverviewPatientPage from "./OverviewPatient";


export const patientMenuItems: menuItemsType = {
    Overview: "Overview",
    AllExcersices: "All Excercises",
    FemFitExcersicees: "Femfit patitents",
}

export const patientMenuItemskeys = Object.keys(patientMenuItems)

const PatientPage = () => {
    const pathname = useLocation().pathname.split('/').pop()
    const activePage = pathname === undefined || pathname === '' ? patientMenuItems.Overview : pathname
    const navigate = useNavigate()
    const handleChangePath = (menuItem: string) => {
        navigate(menuItem)
    }

    return (
        <div className="container">
            {SidePanel(patientMenuItems, activePage, handleChangePath)}
            {Header(getTextFromkey(patientMenuItems, activePage))}
            <div className="content">
                {activePage === patientMenuItemskeys[0] ? <OverviewPatientPage /> : <></>}
                {/*pathname[1] === patientMenuItemskeys[1] ? <FemFitOverviewPage /> : <></>*/}
                {activePage === patientMenuItemskeys[2] ? <FemFitOverviewPage /> : <></>}
            </div>
        </div>
    )
}


export default PatientPage;