/* eslint-disable react/display-name */
import { Flex, Spinner } from '@chakra-ui/react';
import { ComponentType, useEffect, useState } from 'react';

/**
 * Higher-order component for spinner
 * wrappes the component with a spinner
 * @param Component the component that is wrappes
 * @param duration the duration of the spinner
 */
const withSpinner =
  <P extends object>(
    Component: ComponentType<P>,
    duration: number = 200,
  ): ComponentType<P> =>
  (props) => {
    const [spinner, setSpinner] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => setSpinner(false), duration);
    }, []);
    return spinner ? (
      <Flex w="100%" h="100vh" justify="center" align="center">
        <Spinner size="xl" color="primary.600" />
      </Flex>
    ) : (
      <Component {...props} />
    );
  };

export default withSpinner;
