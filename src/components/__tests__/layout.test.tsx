import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Layout from '../Layout';
import { mockStore, MockStore } from '../../state/mocks/store.mock';
import PatientPage from '../../pages/PatientPage';

jest.mock('../../hooks/useSilentRefresh');
jest.mock('../../hooks/useBreadcrumbs', () => {
  return [];
});
describe('Test layout', () => {
  it('renders correctlyu', () => {
    const store = mockStore();
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <PatientPage />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
