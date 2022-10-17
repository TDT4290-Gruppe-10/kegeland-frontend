import OverviewPatientCard from "../../components/OverviewPatientCard";
  

const patient = {
        patientid: 1,
        name: "Ola nordmann",
        age: 23,
        workoutSummery: {
            numberOfExcersisees: 10,
            point: 35,
            intencity: 3,
            missedDays: 4
        }
      };
     
function OverviewPatientPage() {
    return (
        <>
            {OverviewPatientCard(patient.name, patient.patientid, patient.age)}
        </>
    );
}

export default OverviewPatientPage;