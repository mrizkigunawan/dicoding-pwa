import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';
import SnackbarInitiator from '../../src/scripts/utils/snackbar-initiator';

const createFavoriteButtonInitiatorWithRestaurant = async (restaurant) => {
  SnackbarInitiator.init({
    snackbarContainer: document.querySelector('.snackbar'),
  });

  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favorite-button-container'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    snackbarHelper: SnackbarInitiator,
    restaurant,
  });
};

export { createFavoriteButtonInitiatorWithRestaurant };
