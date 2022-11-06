import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserRole } from '../../state/ducks/auth/auth.interface';
import { user } from '../mocks/user.mock';
import PatientsTable from '../PatientsTable';

describe('Test patients table', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <PatientsTable patients={[user, user]} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
