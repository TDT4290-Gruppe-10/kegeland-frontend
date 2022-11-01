import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import 'moment/locale/en-gb';
import './styles/reset.css';

import App from './App';

// Global configuration for moment
moment.locale('en-gb');
momentTimezone.tz.setDefault('Europe/Oslo');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
