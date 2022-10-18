import { useLocation } from "react-router-dom";
import SidePanel from "../../components/SidePanel";

import AllPatientsPage from "./AllPatients";
import LowActivityPatients from "./LowActivityPatients";
import styles from "../../index.module.scss";
import { getTextFromkey, menuItemsType } from "../../utils/Things";
import Header from "../../components/Header";

export const patientsMenuItems: menuItemsType = {
  allpatients: "All my patients",
  lowactivity: "! Low activity",
  femfit: "Femfit",
  more: "More...",
};

export const patientsMenuItemskeys = Object.keys(patientsMenuItems);

const PatientsPage = () => {
  const pathname = useLocation().pathname.split("/");
  const activePage: string =
    pathname[1] === "" ? patientsMenuItemskeys[0] : pathname[1];

  const handleChangePath = (menuItem: string) => {
    return "/" + menuItem;
  };
  return (
    <div className={styles.container}>
      {SidePanel(patientsMenuItems, activePage, handleChangePath)}
      {Header(getTextFromkey(patientsMenuItems, activePage))}
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
