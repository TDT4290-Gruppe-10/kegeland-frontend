import SidePanel from "../../components/SidePanel";

import AllPatientsPage from "./AllPatients";
import LowActivityPatients from "./LowActivityPatients";
import styles from "../../index.module.scss";
import { getTextFromkey, menuItemsType } from "../../utils/Things";
import Header from "../../components/Header";
import { useState } from "react";

export const patientsMenuItems: menuItemsType = {
  allpatients: "All my patients",
  lowactivity: "! Low activity",
  femfit: "Femfit",
  more: "More...",
};

export const patientsMenuItemskeys = Object.keys(patientsMenuItems);

const PatientsPage = () => {
  const [activePage, setActivePage] = useState("allpatients");
  const headerText = getTextFromkey(patientsMenuItems, activePage);

  return (
    <div className={styles.container}>
      <SidePanel
        menuItems={patientsMenuItems}
        activePage={activePage}
        setActivePage={setActivePage}
        back={false}
        handleNavigationBack={() => ""}
      />
      <Header headerText={headerText} />
      <div className={styles.content}>
        {activePage === "" || activePage === patientsMenuItemskeys[0] ? (
          <AllPatientsPage />
        ) : (
          <></>
        )}
        {activePage === patientsMenuItemskeys[1] ? (
          <LowActivityPatients />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PatientsPage;
