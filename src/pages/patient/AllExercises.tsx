import {
  Box,
  Wrap,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';

import { getAllPatientSessions } from '../../state/ducks/patients/patients.actions';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { Session } from '../../state/ducks/sessions/sessions.interface';

const AllExercises = () => {
  const { patientId } = useParams();

  const dispatch = useAppDispatch();
  const { patientData, loading } = useAppSelector(
    (state) => state.singlePatient,
  );

  const fetchPatientData = () => {
    dispatch(getAllPatientSessions(patientId as string));
  };

  useEffect(() => {
    fetchPatientData();
  }, []);
  useEffect(() => {}, [patientData]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <Wrap>
      <Box maxWidth="900px" paddingBottom={100}>
        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Sensor</Th>
              </Tr>
            </Thead>
            <Tbody>
              {patientData?.map((data: Session) => (
                <Tr key={data.id}>
                  <Td>
                    <a href={'/patient/' + patientId + '/exercise/' + data.id}>
                      {moment(data.createdAt).format('DD.MM hh:mm')}
                    </a>
                  </Td>
                  <Td>
                    <a href={'/patient/' + patientId + '/exercise/' + data.id}>
                      {data.sensor}
                    </a>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Wrap>
  );
};

export default AllExercises;
