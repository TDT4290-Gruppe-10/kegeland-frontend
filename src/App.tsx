import { Provider } from "react-redux";
import { store, persistor } from './state/store';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { PersistGate } from "redux-persist/integration/react";
import RoutesRoute from "./Routes";
const theme = extendTheme({
  colors: {
    default: {
      100: "blue",
      200: "green"
    }
  }
})

function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
          <RoutesRoute/>
      </PersistGate>
    </Provider>
  );
}

export default App;
