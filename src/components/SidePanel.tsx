import { Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { menuItemsType } from "../utils/Things";
import { RiArrowGoBackLine } from "react-icons/ri"



function Sidepanel(menuItems: menuItemsType, activePage: string, handleNavigation: (menuItem: string) => string, back = false, handleNavigationBack: () => string = () => '') {

    const navigate = useNavigate()


    return (
        <div className="sidepanel">
            {back ?
                <Link className="GoBack" href={handleNavigationBack()}><RiArrowGoBackLine /><Text pl={2}>Go Back</Text></Link>
                : <div style={{ height: "100px" }}></div>}
            {Object.entries(menuItems).map(([menuItem, menuItemText]) => (
                <>
                    {menuItem === activePage ? (
                        <div className="sidepanelElement" >
                            <div className="bluebox"></div>
                            <div className="sidepanelText" >
                                {menuItemText}
                            </div>
                        </div>
                    ) : (
                        <Link  key={menuItem} className="sidepanelElement" href={handleNavigation(menuItem)}>
                            <div className="sidepanelText" >
                                {menuItemText}
                            </div>
                        </Link>
                    )}
                </>
            ))
            }
        </div >
    );
}

export default Sidepanel;