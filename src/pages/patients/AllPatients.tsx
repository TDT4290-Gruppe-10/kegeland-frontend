import Patient from "../../components/Patient";
import { Box, Flex, Wrap } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../state/ducks/patients/patients.actions";
import { AppDispatch, RootState } from "../../state/store";
import { useEffect } from "react";

function AllPatientsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { patients } = useSelector((state: RootState) => state.patients);

  const fetchUsers = () => {
    dispatch(getAllPatients());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrap padding={5}>
      {patients.map((pat: any) => (
        <Patient
          key={pat.id}
          name={`${pat.firstName} ${pat.lastName}`}
          id={pat.id}
        />
      ))}
    </Wrap>
  );
}

export default AllPatientsPage;
