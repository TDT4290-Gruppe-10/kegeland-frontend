import renderer from 'react-test-renderer';
import { user } from '../mocks/user.mock';
import UserAvatar from '../UserAvatar';

describe('Test user avatar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UserAvatar user={user} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
