import { Box } from '@chakra-ui/react';
import styles from '../../../index.module.scss';
import ExerciseGraph from './ExerciseGraph';
import ExerciseQuestionnaries from './ExerciseQuestionnaries';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { exerciseMenuItems } from '../../../state/ducks/layout/layout.reducer';

const ExerciseSessionPage = () => {
  const {activePage } = useSelector(
    (state: RootState) => state.sidePanel,
  );

  return (
    <Box>
      {activePage === exerciseMenuItems.graph && <ExerciseGraph />}
      {activePage === exerciseMenuItems.questionnaries && <ExerciseQuestionnaries />}
    </Box>
  );
};

export default ExerciseSessionPage;
