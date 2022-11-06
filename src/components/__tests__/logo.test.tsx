import renderer from 'react-test-renderer';
import Logo from '../Logo';

describe('Test logo', () => {
  it('renders correctlyu', () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
