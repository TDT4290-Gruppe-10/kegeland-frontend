import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import ExerciseTable from '../ExerciseTable';
import { sessions } from '../mocks/sessions.mock';

describe('Test exercise table', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ExerciseTable sessions={sessions} patientId="patientId" />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
