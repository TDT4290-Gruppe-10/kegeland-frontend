import { ChartType } from 'chart.js';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { SensorType } from '../../../state/ducks/sensors/sensors.interface';
import { store } from '../../../state/store';
import { session } from '../../mocks/sessions.mock';
import GraphOptionsModal from '../GraphOptionsModal';

describe('Test graph options modal', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <GraphOptionsModal
            sensor={{
              id: 'sensorId',
              name: SensorType.FEMFIT,
              labels: ['s1', 's2', 's3'],
            }}
            updatePlot={(label: string, plot: ChartType) => {}}
            resetPlot={() => {}}
            updateXAxis={(value: boolean) => {}}
            isOpen={false}
            onClose={() => {}}
          />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
