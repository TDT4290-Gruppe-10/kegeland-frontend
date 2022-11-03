import { Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import {
  AiOutlineClockCircle,
  AiOutlineStock,
  AiOutlineCalendar,
} from 'react-icons/ai';

import Card from '../components/Card';
import LabeledValue from '../components/LabeledValue';
import withLayout from '../hoc/withLayout';
import usePatient from '../hooks/usePatient';
import WeeklySessionsChart from '../components/WeeklySessionsChart';
import ExerciseTable from '../components/ExerciseTable';

type PatientPageParams = {
  patientId: string;
};

const PatientPage: React.FC = () => {
  const [isGreaterThanLg] = useMediaQuery('(min-width: 62em)');
  const { patientId } = useParams<PatientPageParams>();
  const { data, details, loading } = usePatient(patientId || '');

  return (
    <>
      <Flex flexDirection={isGreaterThanLg ? 'row' : 'column'}>
        <Card
          marginRight={5}
          maxW={isGreaterThanLg ? 48 : '100%'}
          minH={isGreaterThanLg ? 'md' : undefined}
          loading={loading}>
          <Stack
            spacing={4}
            direction={isGreaterThanLg ? 'column' : 'row'}
            w="100%"
            alignItems="flex-start">
            <LabeledValue
              label="Workouts this week"
              value={details.sessionsThisWeek}
              icon={AiOutlineCalendar}
            />
            <LabeledValue
              label="Since last exercise"
              value={details.lastSessionDelta}
              icon={AiOutlineClockCircle}
            />
            <LabeledValue
              label="Total workouts"
              value={details.sessionsTotal}
              icon={AiOutlineStock}
            />
          </Stack>
        </Card>
        <Card minH={isGreaterThanLg ? 'md' : undefined} loading={loading}>
          <WeeklySessionsChart sessions={data} numWeeks={12} />
        </Card>
      </Flex>
      <Card loading={loading} minH="36">
        <ExerciseTable sessions={data} patientId={patientId!} />
      </Card>
    </>
  );
};

export default withLayout(PatientPage);
