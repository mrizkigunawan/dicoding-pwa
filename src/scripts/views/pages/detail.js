import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import ReviewsInitiator from '../../utils/review-initiator';
import SnackbarInitiator from '../../utils/snackbar-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  render() {
    return `
      <p class="detail-restaurant__state">
        Loading get restaurant data..
      </p>
      <section class="detail-restaurant" id="main-content">
        <div class="detail-restaurant__container">
          <div id="restaurant"></div>
          <div id="review-list"></div>
          <div id="review-container"></div>
          <div id="favorite-button-container"></div>
        </div>      
      </section>
    `;
  },
  async afterRender() {
    const stateContainer = document.querySelector('.detail-restaurant__state');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      stateContainer.remove();

      ReviewsInitiator.init({
        reviewInputContainer: document.querySelector('#review-container'),
        reviewListContainer: document.querySelector('#review-list'),
        restaurantId: url.id,
        reviews: restaurant.customerReviews,
      });

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favorite-button-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          description: restaurant.description,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
        },
      });
    } catch (error) {
      stateContainer.textContent = error.message;
      SnackbarInitiator.open('error', error.message);
    }
  },
};

export default Detail;
