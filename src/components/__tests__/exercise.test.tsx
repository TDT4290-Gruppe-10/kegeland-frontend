import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { SensorType } from '../../state/ducks/sensors/sensors.interface';
import Card from '../Card';
import Exercise from '../Exercise';

describe('Test excercise', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Exercise date="20.02.2022" id="id" sensor={SensorType.FEMFIT} />{' '}
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
