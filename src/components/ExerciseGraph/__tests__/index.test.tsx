import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ExerciseGraph from '..';
import { SensorType } from '../../../state/ducks/sensors/sensors.interface';
import { store } from '../../../state/store';
import { session } from '../../mocks/sessions.mock';

describe('Test exrecise index', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ExerciseGraph
            sensor={{
              id: 'sensorId',
              name: SensorType.FEMFIT,
              labels: ['s1', 's2', 's3'],
            }}
            session={session}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
