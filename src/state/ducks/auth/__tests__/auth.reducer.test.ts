import { store } from "../../../store";
import { signInUser, signOutUser, signUpUser } from "../auth.actions";
import { initialState } from "../auth.reducer";
import { apiCaller } from "../../../../utils/apiCaller";
import loginResponse from "../mocks/loginResponse.mock";
import { UserRole } from "../auth.interface";
import { useSelector } from "react-redux";
import { RootState } from '../../../store';
import { StatHelpText } from "@chakra-ui/react";

jest.mock("../../../../utils/apiCaller");

describe("Test auth slice", () => {
  it("Should return initial state", () => {
    const state = store.getState().auth;
    expect(state).toEqual(initialState);
  });

  it("signInUser/rejected should set state error", async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject());
    await store.dispatch(
      signInUser({ email: "ola.nordmann@gmail.com", password: "12324" })
    );
    const state = store.getState().auth;
    expect(state.error).toBeTruthy();
  });

  it("signInUser/fulfilled should set authorized state", async () => {
    (apiCaller as any).mockImplementation(() => Promise.resolve(loginResponse));
    await store.dispatch(
      signInUser({ email: "ola.nordmann@gmail.com", password: "12324" })
    );
    const state = store.getState().auth;
    const newState = {
      ...initialState,
      loading: false,
      isSignedIn: true,
      authUser: { id: loginResponse.id, email: loginResponse.email },
      userDetails: loginResponse.details,
      error: undefined,
    };
    expect(state).toEqual(newState);
  });

  it("signOutUser/fulfilled should set unauthorized state", async () => {
    (apiCaller as any).mockImplementation(() => Promise.resolve());
    await store.dispatch(
      signOutUser()
    );
    const state = store.getState().auth;
    const newState = {
      ...initialState,
      loading: false,
      isSignedIn: false,
      authUser: undefined,
      userDetails: undefined,
      error: undefined,
    };
    expect(state).toEqual(newState);
  });

  it("signOutUser/rejected should set unauthorized state", async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject());
    await store.dispatch(
      signOutUser()
    );
    const state = store.getState().auth;
    const newState = {
      ...initialState,
      loading: false,
      isSignedIn: false,
      authUser: undefined,
      userDetails: undefined,
    };
    expect(state).toEqual(newState);
  });

  it("signUpUser/rejected should set error", async () => {
    (apiCaller as any).mockImplementation(() => Promise.reject());
    await store.dispatch(
      signUpUser({name: {firstName: "ola", lastName: "Nordmann"}, roles: [UserRole.PHYSICIAN], email: "ola.nordmann@gmail.com", password: "1234567"})
    );
    const state = store.getState().auth;
    expect(state.error).toBeTruthy();
  });

  it("signUpUser/fulfilled should set authorized state", async () => {
    (apiCaller as any).mockImplementation(() => Promise.resolve(loginResponse));
    await store.dispatch(
      signUpUser({name: {firstName: "ola", lastName: "Nordmann"}, roles: [UserRole.PHYSICIAN], email: "ola.nordmann@gmail.com", password: "1234567"})
    );
    const state = store.getState().auth;
    const newState = {
      ...initialState,
      loading: false,
      isSignedIn: true,
      authUser: { id: loginResponse.id, email: loginResponse.email },
      userDetails: loginResponse.details,
      error: undefined,
    };
    expect(state).toEqual(newState);
  });
});
