import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Layout from '../Layout';
import { store } from '../../state/store';

describe('Test layout', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Layout />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
