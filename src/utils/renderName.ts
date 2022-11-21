import { Name } from '../state/ducks/auth/auth.interface';

/**
 * Split the name to first and last name
 * @param name name of a patient
 * @returns a string with first of last name
 */
export const renderName = (name: Name) => {
  const { firstName, lastName } = name;
  return `${firstName} ${lastName}`;
};
