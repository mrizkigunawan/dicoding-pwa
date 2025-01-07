import { createSnackbarTemplate } from '../views/templates/template-creator';

const SnackbarInitiator = {
  init({ snackbarContainer }) {
    this._snackbarContainer = snackbarContainer;
    this._snackbarTimeout = 5000;
  },

  open(type, message) {
    if (type === 'error' || type === 'success') {
      this._snackbarContainer.innerHTML = createSnackbarTemplate(message);
      this._snackbarContainer.classList.add(
        `snackbar--${type}`,
        'snackbar--open',
      );
      setTimeout(() => {
        this._snackbarContainer.classList.remove('snackbar--open');
      }, this._snackbarTimeout);
    }
  },
};

export default SnackbarInitiator;
