import { Wrap } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatientSessions } from "../../state/ducks/patients/patients.actions";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";
import Exercise from "../../components/Exercise";

export const OverviewPatientPage = () => {
  const { patientId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { patientData } = useSelector(
    (state: RootState) => state.singlePatient
  );

  const fetchPatientData = () => {
    dispatch(getAllPatientSessions(patientId as string));
  };

  useEffect(() => {
    fetchPatientData();
  }, []);
  return (
    <Wrap>
      {patientData.map((data: any) => (
        <Exercise date={data.date} id={data.id} sensor={data.sensor} />
      ))}
    </Wrap>
  );
};

export default OverviewPatientPage;
