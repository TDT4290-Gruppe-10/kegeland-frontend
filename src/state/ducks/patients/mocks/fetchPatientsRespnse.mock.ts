import { UserRole } from '../../auth/auth.interface';
import { Patient } from '../patients.interface';

const fetchPatentsResponse: Patient[] = [
  {
    id: 'oaijdoqwdjfwou',
    email: 'ola.nordmann@gmail.com',
    roles: [UserRole.PATIENT],
    name: {
      lastName: 'Nordmann',
      firstName: 'Ola',
    },
  },
  {
    id: 'oaijdoqwdjfwou',
    email: 'ola.nordmann@gmail.com',
    roles: [UserRole.PATIENT],
    name: {
      lastName: 'Nordmann',
      firstName: 'Ola',
    },
  },
];

export default fetchPatentsResponse;
