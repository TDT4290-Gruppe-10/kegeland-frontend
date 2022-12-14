export enum UserRole {
  PATIENT = 'patient',
  PHYSICIAN = 'physician',
}

export type AuthTokens = {
  accessToken: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type Name = {
  firstName: string;
  lastName: string;
};

export type UserDetails = {
  name: Name;
  roles: UserRole[];
};

export type User = { id: string; email: string } & UserDetails;

export interface AuthState {
  ready: boolean;
  loading: boolean;
  isSignedIn: boolean;
  authUser?: {
    id: string;
    email: string;
  };
  userDetails?: UserDetails;
  error?: string;
}

export type LoginDTO = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: string;
  email: string;
  details: UserDetails;
  tokens: AuthTokens;
};

export type RegisterDTO = LoginDTO & UserDetails;

export type RegisterResponse = LoginResponse;

export type ResetPasswordDTO = Pick<LoginDTO, 'email'>;
