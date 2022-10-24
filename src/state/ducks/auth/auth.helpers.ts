import { every, values } from "lodash";

export enum Token {
  ACCESS_TOKEN = "access_token",
  ID_TOKEN = "id_token",
  REFRESH_TOKEN = "refresh_token",
}

export const allTokensExist = (tokens: Record<Token, string>): boolean => {
  const tokenKeys = values(Token);
  return every(
    Object.entries(tokens),
    ([key, val]) => tokenKeys.includes(key as Token) && val !== null
  );
};

export const clearSignedInState = () => {
  return {
    isSignedIn: false,
    authUser: undefined,
    userDetails: undefined,
  };
};
