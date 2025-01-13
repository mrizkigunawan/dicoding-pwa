import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unfavoriting a Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `
      <div class="snackbar"></div>
      <div id="favorite-button-container"></div>
    `;
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should render unfavorite button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not render favorite button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([]);
  });

  it(
    'should not throw error when user click unfavorite button if the unfavorited restaurant is not in the list',
    async () => {
      await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

      await FavoriteRestaurantIdb.deleteRestaurant(1);

      document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

      expect(await FavoriteRestaurantIdb.getRestaurants()).toEqual([]);
    },
  );
});
