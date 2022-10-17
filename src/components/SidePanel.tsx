import { Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { menuItemsType } from "../utils/Things";
import { RiArrowGoBackLine } from "react-icons/ri";
import styles from "../index.module.scss";

function Sidepanel(
  menuItems: menuItemsType,
  activePage: string,
  handleNavigation: (menuItem: string) => string,
  back = false,
  handleNavigationBack: () => string = () => ""
) {
  const navigate = useNavigate();

  return (
    <div className={styles.sidepanel}>
      {back ? (
        <Link className={styles.GoBack} href={handleNavigationBack()}>
          <RiArrowGoBackLine />
          <Text pl={2}>Go Back</Text>
        </Link>
      ) : (
        <div style={{ height: "100px" }}></div>
      )}
      {Object.entries(menuItems).map(([menuItem, menuItemText]) => (
        <>
          {menuItem === activePage ? (
            <div className={styles.sidepanelElement}>
              <div className={styles.bluebox}></div>
              <div className={styles.sidepanelText}>{menuItemText}</div>
            </div>
          ) : (
            <Link
              key={menuItem}
              className={styles.sidepanelElement}
              href={handleNavigation(menuItem)}
            >
              <div className={styles.sidepanelText}>{menuItemText}</div>
            </Link>
          )}
        </>
      ))}
    </div>
  );
}

export default Sidepanel;
