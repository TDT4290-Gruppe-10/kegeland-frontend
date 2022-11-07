import { matchRouteDefinitions } from '../breadcrumb.utils';
import routes, { RoutePath } from '../../routes';
import { matchPath } from 'react-router-dom';
import { routePath } from '../mocks/breadcrumb.mock';

describe('Test breadcrum utils', () => {
  it('extractReuteParam should return routepath for login', () => {
    const matches = matchRouteDefinitions(routes, '/login');
    expect(matches).toEqual(routePath);
  });

  it('extractReuteParam should return routepath for patient', () => {
    const matches = matchRouteDefinitions(routes, '/patients/patientId');
    const routePath = [
      {
        title: 'Patient-patientId',
        active: true,
        isParamRoute: true,
        match: matchPath(
          { path: '/patients/:patientId/', end: false },
          '/patients/patientId',
        ),
      },
    ];
    expect(matches).toEqual(routePath);
  });

  it('extractReuteParam should return routepath for emty list', () => {
    const matches = matchRouteDefinitions(routes, 'hello');
    const routePath: RoutePath[] = [];
    expect(matches).toEqual(routePath);
  });
});
