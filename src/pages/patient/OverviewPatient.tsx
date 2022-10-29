import { Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { groupBy } from 'lodash';
import moment from 'moment';
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
import {
  RiEmotionHappyLine,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiShieldFlashLine,
  RiTimeLine,
} from 'react-icons/ri';

import { setHeaderText } from '../../state/ducks/layout/layout.reducer';
import { getPatientOverview } from '../../state/ducks/patients/patients.actions';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

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

const OverviewPatientPage = () => {
  const { patientId } = useParams();

  const dispatch = useAppDispatch();
  const { patientInformation, loading } = useAppSelector(
    (state) => state.singlePatient,
  );

  const fetchPatientData = () => {
    dispatch(getPatientOverview(patientId as string));
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
    datasets: [{ label: 'Exercises', data, backgroundColor: barColor }],
  };

  const name = patientInformation?.name;
  const workoutsThisWeek = grouped[thisWeek]?.length || 0;
  const numWorkouts = patientInformation?.sessionDates?.length;
  const lastDate =
    numWorkouts !== 0 && patientInformation?.sessionDates
      ? patientInformation?.sessionDates[0]
      : undefined;

  return (
    <Wrap padding={5}>
      <Flex justifyContent="space-between" width="900px">
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
        {/* <ul>
          <li>Workouts this week: {workoutsThisWeek}</li>
          <li>
            Last exercise:{' '}
            {lastDate
              ? moment(lastDate).format('DD.MM at HH:mm')
              : 'No exercises'}
          </li>
          <li>Total exercises: {numWorkouts}</li>
        </ul> */}
      </Flex>

      <WrapItem>
        <Bar
          width="900px"
          height="400px"
          options={chartOptions}
          data={chartData}
        />
      </WrapItem>
    </Wrap>
  );
};

export default OverviewPatientPage;
