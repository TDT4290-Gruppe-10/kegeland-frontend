import renderer from 'react-test-renderer';
import Layout from '../Layout';
import Patient from '../Patient';

describe('Test patient', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(<Patient name={'ola nordmann'} id={'userId'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
