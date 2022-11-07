import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { routePath } from '../../utils/mocks/breadcrumb.mock';
import Breadcrumbs from '../Breadcrumbs';

describe('Test bredcrumb', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Breadcrumbs crumbs={[]} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
