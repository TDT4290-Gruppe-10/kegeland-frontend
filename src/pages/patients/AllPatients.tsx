import { Wrap } from '@chakra-ui/react';
import { useEffect } from 'react';

import Patient from '../../components/Patient';
import { getAllPatients } from '../../state/ducks/patients/patients.actions';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

const AllPatientsPage = () => {
  const dispatch = useAppDispatch();
  const { patients } = useAppSelector((state) => state.patients);

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
};

export default AllPatientsPage;
