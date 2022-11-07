import renderer from 'react-test-renderer';

import Card from '../Card';

describe('Test card', () => {
  it('renders correctlyu', () => {
    const tree = renderer.create(<Card loading={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
