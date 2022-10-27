import AllPatientsPage from './AllPatients';
import LowActivityPatients from './LowActivityPatients';
import {Box, GridItem } from '@chakra-ui/react';
import {useSelector } from 'react-redux';
import {RootState } from '../../state/store';
import { patientsMenuItems } from '../../state/ducks/layout/layout.reducer';


const PatientsPage = () => {
  const {activePage } = useSelector(
    (state: RootState) => state.sidePanel,
  );

  return (
    <Box>
      {activePage === patientsMenuItems.allpatients && <AllPatientsPage />}
      {activePage === patientsMenuItems.lowactivity && <LowActivityPatients />}
    </Box>
  );
};

export default PatientsPage;
