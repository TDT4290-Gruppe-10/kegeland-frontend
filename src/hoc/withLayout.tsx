/* eslint-disable react/display-name */
import { ComponentType } from 'react';

import Layout from '../components/Layout';

/**
 * Higher-order component for layout
 * Wrappes the compoent with the same layout
 * @param Component the component to wrap
 * @see {@link Layout}
 */
const withLayout =
  <P extends object>(Component: ComponentType<P>): ComponentType<P> =>
  (props) => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

export default withLayout;
