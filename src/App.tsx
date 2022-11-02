import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Box } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';

import { store, persistor } from './state/store';
import withSilentRefresh from './hoc/withSilentRefresh';
import routes from './routes';

const Wrapper = withSilentRefresh(Box, {
  backgroundColor: 'gray.100',
  height: 'full',
  width: 'full',
});

function App() {
  const renderRoutes = useRoutes(routes);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>{renderRoutes}</Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
