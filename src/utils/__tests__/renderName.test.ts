import { renderName } from '../renderName';

describe('Test render name utils', () => {
  it('renderName should Ola Nordmann', () => {
    const name = renderName({ firstName: 'Ola', lastName: 'Nordmann' });
    expect(name).toEqual('Ola Nordmann');
  });
});
