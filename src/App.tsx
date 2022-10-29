import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Box } from '@chakra-ui/react';

import { store, persistor } from './state/store';
import RoutesRoute from './Routes';
import withSilentRefresh from './hoc/withSilentRefresh';

const Wrapper = withSilentRefresh(Box);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <RoutesRoute />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
