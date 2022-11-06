import renderer from 'react-test-renderer';
import { SensorType } from '../../../state/ducks/sensors/sensors.interface';
import GraphHeader from '../GraphHeader';
import { session } from '../../mocks/sessions.mock';

describe('Test Graph header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <GraphHeader
          sensor={{
            id: 'sensorId',
            name: SensorType.FEMFIT,
            labels: ['s1', 's2', 's3'],
          }}
          session={session}
          toggleSettings={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
