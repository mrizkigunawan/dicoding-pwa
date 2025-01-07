import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  render() {
    return `
      <section class="restaurant favorite" id="main-content">
        <div class="restaurant__container">
          <h1 class="restaurant__heading">
            Your Favorite Restaurants
          </h1>
          <p class="restaurant__list-state">
            You have not added any restaurant to favorite yet.
          </p>
          <div id="restaurants" class="restaurant__list"></div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const stateContainer = document.querySelector('.restaurant__list-state');
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      stateContainer.remove();
    } else {
      stateContainer.textContent = 'You have not added any restaurant to favorite yet.';
    }
  },
};

export default Favorite;
