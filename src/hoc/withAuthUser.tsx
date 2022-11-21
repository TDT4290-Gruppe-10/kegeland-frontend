/* eslint-disable react/display-name */
import { ComponentType, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../hooks/useAppSelector';
import { User } from '../state/ducks/auth/auth.interface';

export type WithAuthUserProps = {
  user: User;
};

/**
 * Higher-order component to check if user is logged in
 * Wrapps the component so the user gets redirectet to login if not logged in
 * @param Component the component to wrap
 * @returns component | null
 */
const withAuthUser =
  <P extends WithAuthUserProps>(
    Component: ComponentType<P>,
  ): ComponentType<Omit<P, keyof WithAuthUserProps>> =>
  (props) => {
    const navigate = useNavigate();
    const { isSignedIn, authUser, userDetails } = useAppSelector(
      (state) => state.auth,
    );

    useEffect(() => {
      if (!isSignedIn || !authUser) {
        navigate('/login');
      }
    }, [authUser, isSignedIn]);

    const mapStateToProps: any = {
      user: { ...authUser, ...userDetails },
    };

    return isSignedIn && authUser ? (
      <Component {...props} {...mapStateToProps} />
    ) : null;
  };

export default withAuthUser;
