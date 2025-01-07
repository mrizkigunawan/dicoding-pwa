/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant-item__card">
      <figure class="restaurant-item__card-image">
        <img
          src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
          alt="${restaurant.name}"
        >
      </figure>
      <div class="restaurant-item__card-content">
        <div class="restaurant-item__rating">
          <img
            src="./images/star.png"
            alt="rating icon"
            class="restaurant-item__rating-icon"
          >
          <span class="restaurant-item__rating-text">
            ${restaurant.rating}
          </span>
        </div>
        <a
          href="/#/detail/${restaurant.id}"
          class="restaurant-item__name"
        >
          ${restaurant.name}
        </a>
        <p class="restaurant-item__description">
          ${restaurant.description.substring(0, 100)}...
        </p>
        <div class="restaurant-item__location">
          <img
            src="./images/place.png"
            alt="location icon"
            class="restaurant-item__location-icon"
          >
          <span class="restaurant-item__location-text">
            ${restaurant.city}
          </span>
        </div>
      </div>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <figure class="detail-restaurant__figure">
  <img
    src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
    alt="${restaurant.name}"
    class="detail-restaurant__image"
  >
  </figure>
  <div class="detail-restaurant__content">
    <div class="detail-restaurant__content-section">
      <h2 class="detail-restaurant__title">
        ${restaurant.name}
      </h2>
      <div class="detail-restaurant__rating">
        <span class="detail-restaurant__rating-text">
          Rating
        </span>
        <img
          src="./images/star.png"
          alt="rating icon"
          class="detail-restaurant__rating-icon"
        >
        <span class="detail-restaurant__rating-text">
          ${restaurant.rating}
        </span>
      </div>
    </div>
    <div class="detail-restaurant__content-section">
      <h3 class="detail-restaurant__subheading">
        Location
      </h3>
      <span class="detail-restaurant__location-text">
        ${restaurant.address}, ${restaurant.city}
      </span>
    </div>
    <div class="detail-restaurant__content-section">
      <h3 class="detail-restaurant__subheading">
        Description
      </h3>
      <p class="detail-restaurant__description">
        ${restaurant.description}
      </p>
    </div>
    <div class="detail-restaurant__content-section detail-restaurant__content-row">
      <div class="detail-restaurant__col">
        <h3 class="detail-restaurant__subheading">
          Foods
        </h3>
        <ul class="detail-restaurant__menu-list">
          ${restaurant.menus.foods.map((food) => `
            <li class="detail-restaurant__list-item">
              ${food.name}
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="detail-restaurant__col">
        <h3 class="detail-restaurant__subheading">
          Drinks
        </h3>
        <ul class="detail-restaurant__menu-list">
          ${restaurant.menus.drinks.map((drink) => `
            <li class="detail-restaurant__list-item">
              ${drink.name}
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  </div>
`;

const createReviewListTemplate = (customerReviews) => `
  <div class="detail-restaurant__content-section">
    <h3 class="detail-restaurant__subheading">
      Customer Reviews
    </h3>
    <div class="detail-restaurant__reviews">
      ${customerReviews.length ? `
          <ul class="detail-restaurant__review-list">
            ${customerReviews.map((review) => `
              <li class="detail-restaurant__review-item">
                <div class="review">
                  <h5 class="review__title">
                    ${review.name}
                  </h5>
                  <p class="review__review">
                    ${review.review}
                  </p>
                  <span class="review__date">
                    ${review.date}
                  </span>
                </div>
              </li>
            `).join('')}
          </ul>
        ` : `
        <p class="detail-restaurant__review-state">
          There's No Review, post yours now.
        </p>
        `}
    </div>
  </div>
`;

const createReviewInputTemplate = () => `
  <form class="review-input">
    <h5 class="review-input__title">Add Review</h5>
    <input
      name="name"
      id="name"
      placeholder="Your Name"
      autocomplete="off"
      class="review-input__input"
      required
    >
    <textarea
      name="review"
      id="review"
      rows="4"
      class="review-input__textarea"
      placeholder="Add your review here.."
      required
    ></textarea>
    <button
      type="submit"
      class="review-input__submit"
    >
      Post
    </button>
  </form>
`;

const createSnackbarTemplate = (message) => `
  <div class="snackbar__message">
    ${message}
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button class="favorite-button favorite-button--primary">
    Add To Favorite
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button class="favorite-button favorite-button--secondary">
    Remove From Favorite
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewInputTemplate,
  createReviewListTemplate,
  createSnackbarTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
