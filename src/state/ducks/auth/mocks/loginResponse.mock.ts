import { LoginResponse, UserRole } from '../auth.interface';

const loginResponse: LoginResponse = {
  id: 'oaijdoqwdjfwou',
  email: 'ola.nordmann@gmail.com',
  details: {
    roles: [UserRole.PATIENT],
    name: {
      lastName: 'Nordmann',
      firstName: 'Ola',
    },
  },
  tokens: {
    accessToken: 'access',
    idToken: 'id',
    refreshToken: 'refresh',
    expiresIn: 3600,
  },
};

export default loginResponse;
