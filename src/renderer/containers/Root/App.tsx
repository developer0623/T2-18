import React, { Suspense } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
// import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import { ConnectedRouter } from 'connected-react-router';
// // import { hot } from 'react-hot-loader/root';
// import theme from '../../styles/theme';
// import muiTheme from '../../styles/muiTheme';
// import Loader from '../../components/Loader';

const Hello = () => {
  return (
    <div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

// export default function App({ store, history }: any) {
//   return (
//     <Provider store={store}>
//         <MuiThemeProvider theme={muiTheme}>
//             <ThemeProvider theme={theme}>
//                 <ConnectedRouter history={history}>
//                     <Suspense fallback={<Loader />}>
//                       <Router>
//                         <Routes>
//                           <Route path="/" element={<Hello />} />
//                         </Routes>
//                       </Router>
//                     </Suspense>
//                 </ConnectedRouter>
//             </ThemeProvider>
//         </MuiThemeProvider>
//     </Provider>
//   );
// }
