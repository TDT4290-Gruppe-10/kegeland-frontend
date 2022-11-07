import { ChakraProvider } from '@chakra-ui/react';
import renderer from 'react-test-renderer';
import { sessions } from '../mocks/sessions.mock';
import WeeklySessionsChart from '../WeeklySessionsChart';
import theme from '../../constants/theme.constants';

describe('Test weekly sessions chart', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChakraProvider theme={theme}>
          <WeeklySessionsChart sessions={sessions} numWeeks={123} />
        </ChakraProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
