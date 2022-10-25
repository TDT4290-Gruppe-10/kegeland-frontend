import { Text, Link, Box } from "@chakra-ui/react";
import { menuItemsType } from "../utils/Things";
import { RiArrowGoBackLine } from "react-icons/ri";
import styles from "../index.module.scss";
import React from "react";

interface sidepanelProps {
  menuItems: menuItemsType;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  back: Boolean;
  handleNavigationBack: () => string;
}

const Sidepanel: React.FC<sidepanelProps> = ({
  menuItems,
  activePage,
  setActivePage,
  back,
  handleNavigationBack,
}) => {
  return (
    <Box
      width={"300px"}
      height={"100%"}
      bgColor={"gray.100"}
      position={"fixed"}
      top={"80px"}
      fontSize={"24px"}
    >
      {back && (
        <Link
          className={styles.GoBack}
          href={handleNavigationBack()}
          borderBottomColor={"gray.400"}
          borderBottomStyle={"solid"}
          borderBottomWidth={"1px"}
          width={"300px"}
        >
          <RiArrowGoBackLine />
          <Text pl={2}>Go Back</Text>
        </Link>
      )}
      {Object.entries(menuItems).map(([menuItem, menuItemText], i) => (
        <Box key={i}>
          {menuItem === activePage ? (
            <Box
              display={"flex"}
              margin={"auto"}
              borderBottomColor={"gray.400"}
              borderBottomStyle={"solid"}
              borderBottomWidth={"1px"}
            >
              <Box w={"10px"} bgColor={"blue.200"}></Box>
              <Box margin={"8px"} marginLeft={"15px"} fontWeight={500}>
                {menuItemText}
              </Box>
            </Box>
          ) : (
            <Box
              borderBottomColor={"gray.400"}
              borderBottomStyle={"solid"}
              borderBottomWidth={"1px"}
            >
              <Box key={menuItem} onClick={() => setActivePage(menuItem)}>
                <Box margin={"8px"} marginLeft={"25px"}>
                  {menuItemText}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Sidepanel;
