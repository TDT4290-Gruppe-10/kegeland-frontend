import useSilentRefresh from "./hooks/useSilentRefresh";

const RefreshWrapper =
  <P extends object>(Component: React.FC<P>): React.FC<P> =>
  (props) => {
    useSilentRefresh();
    return <Component {...props} />;
  };

export default RefreshWrapper;