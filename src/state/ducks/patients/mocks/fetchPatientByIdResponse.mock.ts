import { UserRole } from '../../auth/auth.interface';
import { Patient } from '../patients.interface';

const fetchPatentByIdResponse: Patient = {
  id: 'oaijdoqwdjfwou',
  email: 'ola.nordmann@gmail.com',
  roles: [UserRole.PATIENT],
  name: {
    lastName: 'Nordmann',
    firstName: 'Ola',
  },
};

export default fetchPatentByIdResponse;
