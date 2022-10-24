import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import SidePanel from "../../../components/SidePanel";
import { menuItemsType } from "../../../utils/Things";
import styles from "../../../index.module.scss";
import ExerciseGraph from "./ExerciseGraph";
import ExerciseQuestionnaries from "./ExerciseQuestionnaries";

export const exerciseMenuItems: menuItemsType = {
  graph: "Graphs",
  questionnaries: "Questionnaries",
};
export const exerciseMenuItemskeys = Object.keys(exerciseMenuItems);

const ExerciseSessionPage = () => {
  const pathname = useLocation().pathname.split("/");
  const [activePage, setActivePage] = useState("graph");
  const { exerciseId } = useParams();
  const hederText = exerciseId ?? "hei";

  const handleBack = () => {
    return pathname.slice(0, 3).join("/");
  };
  {
    console.log(
      activePage,
      exerciseMenuItemskeys[0],
      activePage === exerciseMenuItemskeys[0]
    );
  }

  return (
    <Box className={styles.container}>
      <SidePanel
        menuItems={exerciseMenuItems}
        activePage={activePage}
        setActivePage={setActivePage}
        back={true}
        handleNavigationBack={handleBack}
      />
      <Header headerText={hederText} />
      <Box className={styles.content}>
        {activePage === exerciseMenuItemskeys[0] ? <ExerciseGraph /> : <></>}
        {activePage === exerciseMenuItemskeys[1] ? (
          <ExerciseQuestionnaries />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default ExerciseSessionPage;
