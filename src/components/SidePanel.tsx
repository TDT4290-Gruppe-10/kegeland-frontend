import { Text, Link, Box } from "@chakra-ui/react";
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

    return (
        <Box width={"300px"} height={"100%"} bgColor={"gray.100"} position={"fixed"} fontSize={"24px"}>
            {back ? (
                <Link className={styles.GoBack} href={handleNavigationBack()} borderBottomColor={"gray.400"} borderBottomStyle={"solid"} borderBottomWidth={"1px"} width={"300px"}>
                    <RiArrowGoBackLine />
                    <Text pl={2}>Go Back</Text>
                </Link>
            ) : (
                <div style={{ height: "80px" }}></div>
            )}
            {Object.entries(menuItems).map(([menuItem, menuItemText]) => (
                <>
                    {menuItem === activePage ? (
                        <Box display={"flex"} margin={"auto"} borderBottomColor={"gray.400"} borderBottomStyle={"solid"} borderBottomWidth={"1px"}>
                            <Box w={"10px"} bgColor={"blue.200"}></Box>
                            <Box margin={"8px"} marginLeft={"15px"} fontWeight={500} >{menuItemText}</Box>
                        </Box>
                    ) : (
                        <Box borderBottomColor={"gray.400"} borderBottomStyle={"solid"} borderBottomWidth={"1px"}>
                            <Link
                                key={menuItem}
                                href={handleNavigation(menuItem)}
                            >
                                <Box margin={"8px"} marginLeft={"25px"}>{menuItemText}</Box>
                            </Link>
                        </Box>
                    )}
                </>
            ))}
        </Box>
    );
}

export default Sidepanel;
