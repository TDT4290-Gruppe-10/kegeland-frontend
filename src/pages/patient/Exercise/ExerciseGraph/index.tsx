import { Chart } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Chart as ChartJS } from 'chart.js';
import 'chart.js/auto';
import { Container, Spinner, useDisclosure, Divider } from '@chakra-ui/react';
import 'chartjs-adapter-moment';

import useGraphProfile from '../../../../hooks/useGraphProfile';
import { WithPatientExercise } from '../../../../hoc/withPatientExercise';

import GraphOptionsModal from './GraphOptionsModal';
import GraphHeader from './GraphHeader';

ChartJS.register(zoomPlugin);

type ExerciseGraphProps = WithPatientExercise;

const ExerciseGraph: React.FC<ExerciseGraphProps> = ({ sensor, session }) => {
  const { options, chartData, chartRef, updatePlot, resetPlot, updateXAxis } =
    useGraphProfile(sensor, session);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      width="full"
      maxW="container.xl"
      minH="2xl"
      paddingY={4}
      backgroundColor="white"
      borderRadius={5}>
      {chartData ? (
        <>
          <GraphHeader
            sensor={sensor}
            session={session}
            toggleSettings={onOpen}
          />
          <Divider borderColor="gray.300" marginY={4} />
          <Chart
            ref={chartRef}
            type="line"
            options={options}
            data={chartData}
          />
        </>
      ) : (
        <Spinner
          justifySelf={'center'}
          justifyItems={'center'}
          textAlign="center"
          alignSelf={'center'}
        />
      )}
      <GraphOptionsModal
        sensor={sensor}
        isOpen={isOpen}
        onClose={onClose}
        updatePlot={updatePlot}
        resetPlot={resetPlot}
        updateXAxis={updateXAxis}
      />
    </Container>
  );
};

export default ExerciseGraph;
