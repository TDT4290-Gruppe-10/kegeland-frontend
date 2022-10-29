import { Box } from '@chakra-ui/react';

import { exerciseMenuItems } from '../../../state/ducks/layout/layout.reducer';
import useAppSelector from '../../../hooks/useAppSelector';

import ExerciseGraph from './ExerciseGraph';
import ExerciseQuestionnaries from './ExerciseQuestionnaries';

const ExerciseSessionPage = () => {
  const { activePage } = useAppSelector((state) => state.sidePanel);

  return (
    <Box>
      {activePage === exerciseMenuItems.graph && <ExerciseGraph />}
      {activePage === exerciseMenuItems.questionnaries && (
        <ExerciseQuestionnaries />
      )}
    </Box>
  );
};

export default ExerciseSessionPage;
