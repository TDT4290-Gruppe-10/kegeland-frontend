import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Wrap, WrapItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatientSensorSessions, getPatientOverview } from '../../state/ducks/patients/patients.actions';
import { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { groupBy } from 'lodash';
import moment from 'moment';

// Chart import
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { setHeaderText } from '../../state/ducks/layout/layout.reducer';
import {
  RiCalendarEventFill,
  RiClockwise2Fill,
  RiEmotionHappyFill,
  RiEmotionHappyLine,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiKnifeBloodFill,
  RiShieldFlashLine,
  RiTimeFill,
  RiTimeLine,
} from 'react-icons/ri';
import { FetchQuestionnaireDTO, _profiles } from '../../state/ducks/questionnaires/questionnaries.interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Exercises last 12 weeks',
    },
  },
  scales: {
    y: {
      ticks: {
        precision: 0,
      },
    },
  },
  maintainAspectRation: false,
};

const barColor = 'rgba(53, 162, 235, 0.5)';

export const FemFitOverviewPage = () => {
  const { patientId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { patientInformation, loading } = useSelector(
    (state: RootState) => state.singlePatient,
  );

  const fetchPatientData = () => {
    patientId && dispatch(getAllPatientSensorSessions({userId: patientId, sensor: "femfit"}))
  };

  useEffect(() => {
    fetchPatientData();
  }, []);
  useEffect(() => {
    dispatch(setHeaderText(name));
  }, [patientInformation]);

  if (loading) {
    return <div>loading</div>;
  }

  const grouped = groupBy(patientInformation?.sessionDates, (dt) =>
    moment(dt).week(),
  );
  const thisWeek = moment().week();

  const lastTwelve = Array.from({ length: 8 }, (_, i) => thisWeek - i);
  const labels = lastTwelve.map((k) => `Week ${k}`);
  const data = lastTwelve.map((week) => grouped[week]?.length || 0);
  const chartData = {
    labels,
    datasets: [{ label: 'Exercises', data: data, backgroundColor: barColor }],
  };

  const name = patientInformation?.name;
  const workoutsThisWeek = grouped[thisWeek]?.length || 0;
  const numWorkouts = patientInformation?.sessionDates?.length;
  const lastDate =
    numWorkouts !== 0 && patientInformation?.sessionDates
      ? patientInformation?.sessionDates[0]
      : undefined;
      
      
        if (loading) {
            return <div>Loading....</div>
        }

  return (
    <Box padding={5}>
      <Flex justifyContent="space-between" minW={'600px'} maxW={'900px'}>
        <Flex direction="column" alignItems="center">
          <Flex alignItems="center">
            {workoutsThisWeek > 2 && <RiEmotionHappyLine size="50px" />}
            {workoutsThisWeek === 1 && <RiEmotionNormalLine size="50px" />}
            {workoutsThisWeek === 0 && <RiEmotionUnhappyLine size="50px" />}
            <Flex
              padding="10px"
              bgColor="gray.50"
              boxShadow={'md'}
              rounded={'md'}
              justifyContent="center"
              alignItems="center"
              width={50}>
              <Text fontSize={'2xl'}>{workoutsThisWeek}</Text>
            </Flex>
          </Flex>
          <Text fontSize={'2xl'}>Workouts this week</Text>
        </Flex>
        <Flex direction="column" alignItems="center">
          <Flex alignItems="center">
            <RiTimeLine size="50px" />
            <Flex
              padding="10px"
              bgColor="gray.50"
              boxShadow={'md'}
              rounded={'md'}
              justifyContent="start"
              alignItems="center">
              <Text fontSize={'2xl'}>
                {lastDate ? moment(lastDate).fromNow() : 'No exercises'}
              </Text>
            </Flex>
          </Flex>
          <Text fontSize={'2xl'}>Since last exercise</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Flex alignItems="center">
            <RiShieldFlashLine size="50px" />
            <Flex
              padding="10px"
              bgColor="gray.50"
              boxShadow={'md'}
              rounded={'md'}
              width={50}
              justifyContent="center"
              alignItems="center">
              <Text fontSize={'2xl'}>{numWorkouts}</Text>
            </Flex>
          </Flex>
          <Text fontSize={'2xl'}>Total workouts</Text>
        </Flex>
      </Flex>

      <WrapItem>
        <Box position={'relative'} margin={'auto'} width={'50vw'}>
          <Bar
            options={chartOptions}
            data={chartData}
          />
        </Box>
      </WrapItem>
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
              {patientInformation?.map((data: any) => (
                <Tr key={data.id}>
                  <Td>
                    <a
                      href={'/patient/' + patientId + '/exercise/' + data.id}>
                      {moment(data.date).format('DD.MM hh:mm')}
                    </a>
                  </Td>
                  <Td>
                    <a
                      href={'/patient/' + patientId + '/exercise/' + data.id}>
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
    </Box>
  );
};

export default FemFitOverviewPage;
