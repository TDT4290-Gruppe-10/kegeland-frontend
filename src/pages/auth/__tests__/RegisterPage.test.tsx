import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { mockStore } from '../../../state/mocks/store.mock';
import RegisterPage from '../RegisterPage';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const actualNav = jest.requireActual('react-router-dom');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Test excercise', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore()}>
          <MemoryRouter>
            <RegisterPage />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
