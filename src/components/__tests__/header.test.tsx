import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Test header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header isSidebarOpen={false} toggleSidebar={() => {}} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
