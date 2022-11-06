import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Test header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header isSidebarOpen={false} toggleSidebar={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
