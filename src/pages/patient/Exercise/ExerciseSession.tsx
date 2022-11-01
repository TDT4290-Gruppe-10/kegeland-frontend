import { Box } from '@chakra-ui/react';

import { exerciseMenuItems } from '../../../state/ducks/layout/layout.reducer';
import useAppSelector from '../../../hooks/useAppSelector';
import withPatientExercise from '../../../hoc/withPatientExercise';

import ExerciseGraph from './ExerciseGraph';
import ExerciseQuestionnaries from './ExerciseQuestionnaries';

const ExerciseSessionPage = () => {
  const { activePage } = useAppSelector((state) => state.sidePanel);
  const Graph = withPatientExercise(ExerciseGraph);
  return (
    <Box>
      {activePage === exerciseMenuItems.graph && <Graph />}
      {activePage === exerciseMenuItems.questionnaries && (
        <ExerciseQuestionnaries />
      )}
    </Box>
  );
};

export default ExerciseSessionPage;
