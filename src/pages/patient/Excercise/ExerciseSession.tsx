import { Link, Text } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import Header from "../../../components/Header";
import SidePanel from "../../../components/SidePanel";
import { getTextFromkey, menuItemsType } from "../../../utils/Things";
import ExerciseGraph from "./ExerciseGraph";
import ExerciseQuestionnaries from "./ExerciseQuestionnaries";

export const exerciseMenuItems: menuItemsType = {
  graph: "graph",
  questionnaries: "questionnaries",
};
export const exerciseMenuItemskeys = Object.keys(exerciseMenuItems);

const ExerciseSessionPage = () => {
  const pathname = useLocation().pathname.split("/");
  const activePage: string =
    pathname[7] === "" ? exerciseMenuItemskeys[0] : pathname[7];

  const handleChangePath = (menuItem: string) => {
    pathname.pop();
    return pathname.join("/") + "/" + menuItem;
  };

  const handleBack = () => {
    pathname.slice()
    return pathname.join("/");
}
  return (
    <div className="container">
      {SidePanel(exerciseMenuItems, activePage, handleChangePath, true, handleBack)}
      {Header(getTextFromkey(exerciseMenuItems, activePage))}
      <div className="content">
        {activePage === "" || activePage === exerciseMenuItemskeys[0] ? (
          <ExerciseGraph />
        ) : (
          <></>
        )}
        {activePage === exerciseMenuItemskeys[1] ? (
          <ExerciseQuestionnaries />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ExerciseSessionPage;
