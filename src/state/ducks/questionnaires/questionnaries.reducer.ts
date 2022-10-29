import { createSlice } from '@reduxjs/toolkit';

import {
  getAllAnswersForSession,
  getAssignedQuestionnaire,
} from './questionnaries.actions';
import { AnswerState, QuestionnaireState } from './questionnaries.interface';

const initialQuestionnariresIdState: QuestionnaireState = {
  questionnaire: undefined,
  loading: false,
  error: undefined,
};

const questionnarieIdSlice = createSlice({
  name: 'questionnaireId',
  initialState: initialQuestionnariresIdState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssignedQuestionnaire.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getAssignedQuestionnaire.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.questionnaire = payload;
      })
      .addCase(getAssignedQuestionnaire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const initialAnswersState: AnswerState = {
  answers: undefined,
  loading: false,
  error: undefined,
};

const answersSlice = createSlice({
  name: 'answer',
  initialState: initialAnswersState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAnswersForSession.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(getAllAnswersForSession.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = undefined;
        state.answers = payload;
      })
      .addCase(getAllAnswersForSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearError } = questionnarieIdSlice.actions;

export const questionnairesIdReducer = questionnarieIdSlice.reducer;
export const answerReducer = answersSlice.reducer;
