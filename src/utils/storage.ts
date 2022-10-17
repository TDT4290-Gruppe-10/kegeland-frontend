import { reduce } from 'lodash';
import { isToken } from 'typescript';
import { Token } from '../state/ducks/auth/auth.helpers';
import { AuthTokens } from '../state/ducks/auth/auth.interface';



export const storeTokens = async ({
  accessToken,
  idToken,
  refreshToken,
}: AuthTokens) => {
  localStorage.setItem("access_token", accessToken)
  localStorage.setItem("id_token", idToken)
  localStorage.setItem("refresh_token", refreshToken)
};

export const retrieveToken = async (token: Token) => {
  let res = localStorage.getItem(token);
  return res
};

export const retrieveTokens = async () => {
  let values = null;
  const accessToken = localStorage.getItem("access_token")
  const idToken = localStorage.getItem("is_token")
  const refreshToken = localStorage.getItem("refresh_token")
  if (!accessToken || !idToken || !refreshToken) {
    throw new Error('Failed to retrieve tokens');
  }

  /* values = localStorage.multiGet(Object.values(Token), (err: any) => {
    if (err) {
      throw new Error('Failed to retrieve tokens');
    }
  }).then((res: any) =>
    reduce(
      res,
      (prev, curr) => {
        const [key, val] = curr;
        if (val) {
          prev[key as Token] = val;
        }
        return prev;
      },
      {} as Record<Token, string>,
    ),
  ); */
  return { "access_token": accessToken, "id_token": idToken, "refresh_token": refreshToken }
};

export const removeTokens = async () => {
  await localStorage.multiRemove(Object.values(Token), (err: any) => {
    if (err) {
      throw new Error('Failed to remove tokens');
    }
  });
};
