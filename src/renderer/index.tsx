import React from 'react';
import { createRoot } from 'react-dom/client';
import { registerFetch, registerLogger } from 'conseiljs';
import fetch from 'node-fetch';
import * as log from 'loglevel';

import { logLevel } from './config.json';
// import App from './containers/Root';
import App from './containers/Root/App';
import { configureStore, history } from './store/configureStore';
// import './utils/i18n';
import './styles/app.global.scss';


const store = configureStore();

// const logger = log.getLogger('conseiljs');
// logger.setLevel(logLevel as log.LogLevelDesc, false);
// registerLogger(logger);
// registerFetch(fetch);

const container = document.getElementById('root')!;
const root = createRoot(container);
// root.render(<App store={store} history={history} />);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.myPing();
