import { useNavigate } from "react-router-dom";
import Patient from "../../components/Patient";
import { Wrap} from '@chakra-ui/react'

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
        },
            patientid3: {
                name: "Ole Nordmann",
                age: 35,
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