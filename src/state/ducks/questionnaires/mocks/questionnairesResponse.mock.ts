import { SensorType } from '../../sensors/sensors.interface';
import { Questionnaire } from '../questionnaires.interface';

const questionnairesResponce: Questionnaire = {
  id: '9x7rPmACKqoE48EUh3Ds',
  name: 'Test questionnaire',
  sensor: SensorType.FEMFIT,
  questions: [
    {
      minVal: 'Not very good',
      question: 'How do you feel?',
      maxVal: 'Very good',
    },
    {
      minVal: 'I hate dogs',
      question: 'Do you like dogs?',
      maxVal: 'I love dogs',
    },
  ],
};

export default questionnairesResponce;
