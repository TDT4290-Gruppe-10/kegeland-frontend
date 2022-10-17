import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import SidePanel from "../../components/SidePanel";
import { getTextFromkey, menuItemsType } from "../../utils/Things";
import FemFitOverviewPage from "./FemfitOverview";
import OverviewPatientPage from "./OverviewPatient";
import styles from "../../index.module.scss";

export const patientMenuItems: menuItemsType = {
  overview: "Overview",
  allexcersies: "All Excercises",
  femfitexcersies: "Femfit Excercises",
};

export const patientMenuItemskeys = Object.keys(patientMenuItems);

const PatientPage = () => {
  const pathname = useLocation().pathname.split("/");
  const activePage = pathname.pop() ?? patientMenuItemskeys[0];
  const navigate = useNavigate();
  const handleChangePath = (menuItem: string) => {
    return pathname.join("/") + "/" + menuItem;
  };
  const handleBack = () => {
    return "/" + pathname[1];
  };
  return (
    <div className={styles.container}>
      {SidePanel(
        patientMenuItems,
        activePage,
        handleChangePath,
        true,
        handleBack
      )}
      {Header(getTextFromkey(patientMenuItems, activePage))}
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
