/* eslint-disable react/display-name */
import useSilentRefresh from '../hooks/useSilentRefresh';

const withSilentRefresh =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    useSilentRefresh();
    return <Component {...props} />;
  };

export default withSilentRefresh;
