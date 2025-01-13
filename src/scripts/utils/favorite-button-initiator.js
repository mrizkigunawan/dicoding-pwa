import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({
    favoriteButtonContainer, favoriteRestaurant, snackbarHelper, restaurant,
  }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    this._snackbarHelper = snackbarHelper;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._snackbarHelper.open('success', 'Restaurant has been added to favorite.');
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.innerHTML = createFavoritedButtonTemplate();
    const favoriteButton = document.querySelector('#unfavoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._snackbarHelper.open('success', 'Restaurant has been removed from favorite.');
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
