import renderer from 'react-test-renderer';

import { answers } from '../mocks/answers.mock';
import { questionnaire } from '../mocks/questionnaires.mock';
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
