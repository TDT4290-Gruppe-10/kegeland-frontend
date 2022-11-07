import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserRole } from '../../state/ducks/auth/auth.interface';
import { SensorType } from '../../state/ducks/sensors/sensors.interface';
import { answers } from '../mocks/answers.mock';
import { questionnaire } from '../mocks/questionnaires.mock';
import PatientsTable from '../PatientsTable';
import QuestionnaireResults from '../QuestionnaireResults';

describe('Test questionnaire results', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <QuestionnaireResults
          answers={answers}
          questionnaire={questionnaire}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
