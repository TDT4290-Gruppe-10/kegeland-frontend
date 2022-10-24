import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import { menuItemsType } from "../../utils/Things";
import FemFitOverviewPage from "./FemfitOverview";
import OverviewPatientPage from "./OverviewPatient";
import styles from "../../index.module.scss";
import { useState } from "react";

export const patientMenuItems: menuItemsType = {
  overview: "Overview",
  allexcersies: "All Excercises",
  femfitexcersies: "Femfit Excercises",
};

export const patientMenuItemskeys = Object.keys(patientMenuItems);

const PatientPage = () => {
  const [activePage, setActivePage] = useState("overview");

  const headerText = "patient name";
  const handleBack = () => {
    return "/";
  };
  return (
    <div className={styles.container}>
      <SidePanel
        menuItems={patientMenuItems}
        activePage={activePage}
        setActivePage={setActivePage}
        back={true}
        handleNavigationBack={handleBack}
      />
      <Header headerText={headerText} />
      <div className={styles.content}>
        {activePage === patientMenuItemskeys[0] ? (
          <OverviewPatientPage />
        ) : (
          <></>
        )}
        {/*pathname[1] === patientMenuItemskeys[1] ? <FemFitOverviewPage /> : <></>*/}
        {activePage === patientMenuItemskeys[2] ? (
          <FemFitOverviewPage />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PatientPage;
