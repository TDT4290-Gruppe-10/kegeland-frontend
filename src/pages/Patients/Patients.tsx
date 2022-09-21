import { useState } from "react";
import { Route, Routes, useLinkClickHandler, useLocation } from "react-router-dom";
import SidePanel from "../../components/SidePanel";
import FemFitOverviewPage from "../Patient/FemFit";
import AllPatientsPage from "./AllPatients";
import LowActivityPatients from "./LowActivityPatients";

export type menuItemsType = {
    AllPatients: string;
    LowActivityPatients: string;
    FemFitPatients: string;
}

const menuItems = {
    AllPatients: "All my patients",
    LowActivityPatients: "! Low activity patients",
    FemFitPatients: "Femfit patitents",
    More: "More..."
}

const keys = Object.keys(menuItems)


const PatientsPage = () => {
    const pathname = useLocation().pathname.split('/')
    console.log("pathname", pathname, pathname[1] === keys[0])

    const activePage = pathname[1] === '' ? Object.keys(menuItems)[0] : pathname[1]

    return (
        <div className="container">
            {SidePanel(menuItems, activePage)}
            {pathname[1] === '' || pathname[1] === keys[0] ? <AllPatientsPage /> : <></>}
            {pathname[1] === keys[1] ? <LowActivityPatients /> : <></>}
            {pathname[1] === keys[2] ? <FemFitOverviewPage /> : <></>}
        </div>
    )

}

const DefaultPatientsPage = () => {



    return (
        <Routes>
            <Route path="/*" element={<PatientsPage />} />
            <Route path={menuItems.AllPatients} element={<PatientsPage />} />
            <Route path={menuItems.LowActivityPatients} element={<PatientsPage />} />
            <Route path={menuItems.FemFitPatients} element={<PatientsPage />} />
        </Routes>
    );
}

export default DefaultPatientsPage;