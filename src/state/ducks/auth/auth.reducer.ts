import { createSlice } from "@reduxjs/toolkit";
import {
  initializeAuthState,
  signInUser,
  signOutUser,
  signUpUser,
} from "./auth.actions";
import { AuthState } from "./auth.interface";

const initialState: AuthState = {
  ready: false,
  loading: false,
  isSignedIn: false,
  authUser: undefined,
  userDetails: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeAuthState.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(initializeAuthState.fulfilled, (state, { payload }) => {
      state.ready = true;
      if (!payload) {
        state.isSignedIn = false;
        state.authUser = undefined;
        state.userDetails = undefined;
      }
    });
    builder.addCase(initializeAuthState.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error.message;
    });
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        const { id, email } = payload;
        state.loading = false;
        state.isSignedIn = true;
        state.authUser = { id, email };
        state.userDetails = payload.details;
        state.error = undefined;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.loading = false;
        state.isSignedIn = false;
        state.authUser = undefined;
        state.userDetails = undefined;
        state.error = undefined;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOutUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        const { id, email } = payload;
        state.loading = false;
        state.isSignedIn = true;
        state.authUser = { id, email };
        state.userDetails = payload.details;
        state.error = undefined;
      })
      .addCase(signUpUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
