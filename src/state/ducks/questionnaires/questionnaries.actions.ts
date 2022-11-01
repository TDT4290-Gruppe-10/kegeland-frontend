import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCaller } from '../../../utils/apiCaller';

import {
  FetchAnswerResponse,
  FetchQuestionnaireDTO,
  FetchQuestionnaireResponse,
  FetchSessionAnswerDTO,
} from './questionnaries.interface';

export const getAssignedQuestionnaire = createAsyncThunk(
  'questionnaires/assigned',
  async (data: FetchQuestionnaireDTO) => {
    const { userId, ...params } = data;
    return apiCaller<FetchQuestionnaireResponse>({
      url: `questionnaires/assignments/${userId}`,
      method: 'GET',
      params,
    });
  },
);

export const getAllAnswersForSession = createAsyncThunk(
  'questionnaires/answers',
  async (data: FetchSessionAnswerDTO) => {
    const { questionnaireId, ...params } = data;
    return apiCaller<FetchAnswerResponse>({
      url: `questionnaires/${questionnaireId}/answers`,
      method: 'GET',
      params,
    });
  },
);
