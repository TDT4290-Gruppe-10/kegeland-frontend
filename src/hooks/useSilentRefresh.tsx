import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../state/ducks/auth/auth.actions';
import { AppDispatch, RootState } from '../state/store';

const REFRESH_INTERVAL_MS = 50 * 60 * 1000
const useSilentRefresh = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {isSignedIn} = useSelector((state: RootState) => state.auth);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (isSignedIn) {
      dispatch(refresh());
    }
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      setInterval(() => {
        dispatch(refresh());
      }, REFRESH_INTERVAL_MS);
    } else {
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
    }
    return () => {
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
    };
  }, [isSignedIn]);

  return true;
};

export default useSilentRefresh;