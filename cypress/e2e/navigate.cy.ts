import { apiMock } from './mocks/apiMock.mock';

describe('Login test', () => {
  it('succsessfully load patientList with patients page"', () => {
    apiMock();

    cy.visit('/');
    cy.get('input[name=email]').type('ola@nordmann.com');
    cy.get('input[name=password]').type(`passord {enter}`);
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });
});
