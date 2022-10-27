import Header from '../../components/Header';
import SidePanel from '../../components/SidePanel';
import { menuItemsType } from '../../utils/Things';
import FemFitOverviewPage from './FemfitOverview';
import OverviewPatientPage from './OverviewPatient';
import styles from '../../index.module.scss';
import { Box } from '@chakra-ui/react';
import { AllExercises } from './AllExercises';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { patientMenuItems } from '../../state/ducks/layout/layout.reducer';

const PatientPage = () => {
  const {activePage} = useSelector(
    (state: RootState) => state.sidePanel,
  );

  return (
    <Box>
      {activePage === patientMenuItems.overview && <OverviewPatientPage />}
      {activePage === patientMenuItems.allexcersies && <AllExercises />}
      {activePage === patientMenuItems.femfitexercises && <FemFitOverviewPage />}
    </Box>
  );
};

export default PatientPage;
