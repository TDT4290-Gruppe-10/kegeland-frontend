import { Box } from '@chakra-ui/react';

import { patientMenuItems } from '../../state/ducks/layout/layout.reducer';
import useAppSelector from '../../hooks/useAppSelector';

import FemFitOverviewPage from './FemfitOverview';
import OverviewPatientPage from './OverviewPatient';
import AllExercises from './AllExercises';

const PatientPage = () => {
  const { activePage } = useAppSelector((state) => state.sidePanel);

  return (
    <Box>
      {activePage === patientMenuItems.overview && <OverviewPatientPage />}
      {activePage === patientMenuItems.allexcersies && <AllExercises />}
      {activePage === patientMenuItems.femfitexercises && (
        <FemFitOverviewPage />
      )}
    </Box>
  );
};

export default PatientPage;
