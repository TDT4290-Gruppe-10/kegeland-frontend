import { patientsMenuItems } from "../pages/Patients/Patients";


function Header(headerText: String) {


    return (
        <div className="header">
            <div className="headerText">
                {headerText}
            </div>
        </div>
    )
}

export default Header;