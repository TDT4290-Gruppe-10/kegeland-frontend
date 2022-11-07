import renderer from 'react-test-renderer';

import Menu from '../Menu';

describe('Test manu', () => {
  it('renders correctlyu', () => {
    const tree = renderer.create(<Menu title={'hello'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
