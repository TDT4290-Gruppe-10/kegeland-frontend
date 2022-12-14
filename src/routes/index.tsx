import { NonIndexRouteObject, Outlet, PathMatch } from 'react-router-dom';

import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ExercisePage from '../pages/ExercisePage';
import NotFoundPage from '../pages/NotFound';
import NotImplemented from '../pages/NotImplemented';
import PatientsPage from '../pages/PatientListPage';
import PatientPage from '../pages/PatientPage';

export interface RoutePathDefinition
  extends Omit<NonIndexRouteObject, 'children'> {
  title?: string;
  children?: RoutePathDefinition[];
  path: string;
}

export type RoutePath = {
  title: string;
  active: boolean;
  isParamRoute: boolean;
  match: PathMatch<string>;
};

const routes: RoutePathDefinition[] = [
  {
    title: 'Home',
    path: '/',
    element: <PatientsPage />,
  },
  {
    title: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
  {
    title: 'Register',
    path: '/register',
    element: <RegisterPage />,
  },
  {
    title: 'Not Implemented',
    path: 'not-implemented',
    element: <NotImplemented />,
  },
  {
    path: '/patients/:patientId',
    element: <Outlet />,
    children: [
      {
        title: 'Patient',
        path: '',
        element: <PatientPage />,
      },
      {
        title: 'Exercise',
        path: 'exercise/:exerciseId',
        element: <ExercisePage />,
      },
    ],
  },
  {
    title: '404',
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
