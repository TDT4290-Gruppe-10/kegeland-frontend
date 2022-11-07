import renderer from 'react-test-renderer';
import Header from '../Header';
import SearchBar from '../SearchBar';

describe('Test search bars', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
