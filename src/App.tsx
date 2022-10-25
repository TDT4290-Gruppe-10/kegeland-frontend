import { Provider } from "react-redux";
import { store, persistor } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import RoutesRoute from "./Routes";
import RefreshWrapper from "./refreshWrapper";
import { Box } from "@chakra-ui/react";

const Wrapper = RefreshWrapper(Box);

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
