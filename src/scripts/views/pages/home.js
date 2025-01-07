import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="hero">
        <figure class="hero__figure">
          <img
            src="./images/heros/hero-image_2.jpg"
            alt="food on the table"
            class="hero__figure-img"
          >
        </figure>
      </section>
      <section class="restaurant" id="main-content">
        <div class="restaurant__container">
          <h1 class="restaurant__heading">
            Find A Perfect Restaurant With Joy
          </h1>
          <p class="restaurant__list-state">
            loading get restaurants...
          </p>
          <div id="restaurants" class="restaurant__list">
          </div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const stateContainer = document.querySelector('.restaurant__list-state');
    try {
      const restaurants = await RestaurantSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      stateContainer.remove();
    } catch (error) {
      stateContainer.textContent = error.message;
    }
  },
};

export default Home;
