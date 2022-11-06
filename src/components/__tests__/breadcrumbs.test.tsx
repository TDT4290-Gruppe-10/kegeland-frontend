import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Breadcrumbs from '../Breadcrumbs';

describe('Test bredcrumb', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Breadcrumbs />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
