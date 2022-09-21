import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { menuItemsType } from '../pages/Patients/Patients'



function Sidepanel(menuItems: menuItemsType, activePage: string) {

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
                        <Link className="sidepanelElement" to={"/" + menuItem}>
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