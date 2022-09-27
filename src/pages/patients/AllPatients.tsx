import { WrapText } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import Patient from "../../components/Patient";
import { patientsMenuItemskeys } from "./Patients";
import { Wrap, WrapItem } from '@chakra-ui/react'

function AllPatientsPage() {
    const navigation = useNavigate()
    const handleChangePath = () => {
        const path = 'Patient/:p1I/Overview'
        navigation(path)

    }

    const liste = {
        patientid1: {
            name: "Ola nordmann",
            age: 23,
            workoutSummery: {
                numberOfExcersisees: 10,
                point: 35,
                intencity: 3,
                missedDays: 4
            }
        },
        patientid2: {
            name: "Ole Nordmann",
            age: 55,
            workoutSummery: {
                numberOfExcersisees: 10,
                point: 35,
                intencity: 3,
                missedDays: 1
            }
        }
    }



    return (
        <Wrap spacing='30px'>
            
                {Object.entries(liste).map(([patientId, values]) => (
                    Patient(patientId, values)
                ))}
              
        </Wrap>
    );
}

export default AllPatientsPage;