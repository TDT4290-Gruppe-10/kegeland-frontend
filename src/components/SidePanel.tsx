import { MouseEventHandler } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { menuItemsType } from "../utils/Things";



function Sidepanel(menuItems: menuItemsType, activePage: string, handleNavigation: (menuItem: string) => void) {

    const navigate = useNavigate()


    return (
        <div className="sidepanel">
            <div style={{ height: "100px" }}></div>
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
                        <div key={menuItem} className="sidepanelElement" onClick={() => handleNavigation(menuItem)}>
                            <div className="sidepanelText" >
                                {menuItemText}
                            </div>
                        </div>
                    )}
                </>
            ))
            }
        </div >
    );
}

export default Sidepanel;