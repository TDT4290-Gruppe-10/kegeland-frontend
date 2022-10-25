export const _profiles = {
  femfit: "femfit",
} as const;

export type DeviceType = keyof typeof _profiles;

export type FetchQuestionnaireDTO = {
  userId: string;
  sensor: DeviceType;
};

export type FetchSessionAnswerDTO = {
  questionnaireId: string;
  sessionId: string;
};

export type Questionnaire = {
  id: string;
  name: string;
  sensor: DeviceType;
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
