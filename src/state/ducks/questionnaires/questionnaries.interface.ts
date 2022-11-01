import { SensorType } from '../sensors/sensors.interface';

export type FetchQuestionnaireDTO = {
  userId: string;
  sensor: SensorType;
};

export type FetchSessionAnswerDTO = {
  questionnaireId: string;
  sessionId: string;
};

export type Questionnaire = {
  id: string;
  name: string;
  sensor: SensorType;
  questions: {
    maxVal: string;
    minVal: string;
    question: string;
  }[];
};

export interface QuestionnaireState {
  loading: boolean;
  error?: string;
  questionnaire: Questionnaire | undefined;
}

export interface AnswerState {
  loading: boolean;
  error?: string;
  answers: Answer[] | undefined;
}

export type Answer = {
  userId: string;
  sessionId: string;
  createdAt: Date;
  answers: number[];
};

export type FetchAnswerResponse = Answer[];
export type FetchQuestionnaireResponse = Questionnaire;
