import { Box } from '@chakra-ui/react';

import { patientsMenuItems } from '../../state/ducks/layout/layout.reducer';
import useAppSelector from '../../hooks/useAppSelector';

import LowActivityPatients from './LowActivityPatients';
import AllPatientsPage from './AllPatients';

const PatientsPage = () => {
  const { activePage } = useAppSelector((state) => state.sidePanel);

  return (
    <Box>
      {activePage === patientsMenuItems.allpatients && <AllPatientsPage />}
      {activePage === patientsMenuItems.lowactivity && <LowActivityPatients />}
    </Box>
  );
};

export default PatientsPage;
