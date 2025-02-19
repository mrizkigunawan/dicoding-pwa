import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import SnackbarInitiator from '../utils/snackbar-initiator';

class App {
  constructor({
    button, drawer, content, snackbarContainer,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._snackbarContainer = snackbarContainer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    SnackbarInitiator.init({
      snackbarContainer: this._snackbarContainer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-content');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.main').focus();
    });
  }
}

export default App;
