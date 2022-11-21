import { Token } from '../state/ducks/auth/auth.helpers';
import { AuthTokens } from '../state/ducks/auth/auth.interface';

/**
 * Stores auth tokens in async storage for persistent storage.
 * @param param0 the auth tokens to store
 * @see {@link AuthTokens}
 */
export const storeTokens = async ({
  accessToken,
  idToken,
  refreshToken,
}: AuthTokens) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('id_token', idToken);
  localStorage.setItem('refresh_token', refreshToken);
};

/**
 * Retrieves a token from storage if it exists
 * @param token key of the token to retrieve
 * @returns token if found, else null
 * @see {@link Token}
 */
export const retrieveToken = async (token: Token) => {
  const res = localStorage.getItem(token);
  return res;
};

/**
 * Retrieves all auth tokens stored in async storage
 * @returns all auth tokens in storage
 * @see {@link AuthTokens}
 */
export const retrieveTokens = async () => {
  const accessToken = localStorage.getItem('access_token');
  const idToken = localStorage.getItem('id_token');
  const refreshToken = localStorage.getItem('refresh_token');
  if (!accessToken || !idToken || !refreshToken) {
    throw new Error('Failed to retrieve tokens');
  }

  return {
    access_token: accessToken,
    id_token: idToken,
    refresh_token: refreshToken,
  };
};

/**
 * Removes all tokens stored in async storage
 */
export const removeTokens = async () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('refresh_token');
};
