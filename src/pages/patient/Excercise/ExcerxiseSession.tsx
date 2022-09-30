import { Link, Text } from "@chakra-ui/react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

function ExcerciseSessionPage() {
    const pathname = useLocation().pathname.split('/')
    pathname.pop()
    const handleNavigationBack = () => {
        return pathname.join('/')
    }

    return (
        <div><Link className="GoBack" href={handleNavigationBack()}><RiArrowGoBackLine /><Text pl={2}>Go Back</Text></Link>Excerxise session page</div>
    );
}

export default ExcerciseSessionPage;