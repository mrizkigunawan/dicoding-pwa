import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import swRegister from './utils/sw-register';
// styles
import '../styles/main.css';
import '../styles/responsive.css';

const app = new App({
  button: document.querySelector('.nav__toggler-button'),
  drawer: document.querySelector('.nav__menu'),
  content: document.querySelector('.main'),
  snackbarContainer: document.querySelector('.snackbar'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
