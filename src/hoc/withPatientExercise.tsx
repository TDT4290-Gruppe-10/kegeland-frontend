/* eslint-disable react/display-name */
import { Spinner } from '@chakra-ui/react';
import { ComponentType, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import useSessionSensorSelector from '../hooks/useSensorSelector';
import { fetchSensor } from '../state/ducks/sensors/sensors.actions';
import { Sensor } from '../state/ducks/sensors/sensors.interface';
import { fetchSessionById } from '../state/ducks/sessions/sessions.actions';
import { Session } from '../state/ducks/sessions/sessions.interface';

export type WithPatientExercise = {
  session: Session;
  sensor: Sensor;
};

const withPatientExercise =
  <P extends WithPatientExercise>(
    Component: ComponentType<P>,
  ): ComponentType<Omit<P, keyof WithPatientExercise>> =>
  (props) => {
    const { exerciseId } = useParams();
    const dispatch = useAppDispatch();
    const { sensors, sessions } = useAppSelector((state) => state);
    const sensor = useSessionSensorSelector(sessions.session);

    const loading = sensors.loading || sessions.loading;
    const shouldRender = sessions.session && sensor;

    useEffect(() => {
      if (exerciseId) {
        dispatch(fetchSessionById(exerciseId));
      }
    }, []);

    useEffect(() => {
      if (sessions.session) {
        dispatch(fetchSensor(sessions.session.sensor));
      }
    }, [sessions.session]);

    const mapStateToProps: any = {
      session: sessions.session,
      sensor,
    };

    return (
      <>
        {!loading && shouldRender ? (
          <Component {...props} {...mapStateToProps} />
        ) : (
          <Spinner />
        )}
      </>
    );
  };

export default withPatientExercise;
