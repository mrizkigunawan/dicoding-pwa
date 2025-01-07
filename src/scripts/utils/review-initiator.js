import RestaurantSource from '../data/restaurant-source';
import { createReviewInputTemplate, createReviewListTemplate } from '../views/templates/template-creator';
import SnackbarInitiator from './snackbar-initiator';

const ReviewsInitiator = {
  init({
    reviewInputContainer,
    reviewListContainer,
    reviews,
    restaurantId,
  }) {
    this._reviewInputContainer = reviewInputContainer;
    this._reviewListContainer = reviewListContainer;
    this._reviews = reviews;
    this._restaurantId = restaurantId;
    this._renderReviewList();
    this._renderReviewInput();
  },

  _renderReviewInput() {
    this._reviewInputContainer.innerHTML = createReviewInputTemplate();
    const formReview = document.querySelector('.review-input');
    formReview.addEventListener('submit', (event) => {
      event.preventDefault();
      const newReview = {
        id: this._restaurantId,
        name: event.target.name.value,
        review: event.target.review.value,
      };
      RestaurantSource.saveReview(newReview)
        .then((reviews) => {
          this._clearForm();
          this._renderReviewList(reviews);
          SnackbarInitiator.open('success', 'Review has been added.');
        })
        .catch((error) => {
          SnackbarInitiator.open('error', error.message);
        });
    });
  },

  _renderReviewList(reviews) {
    this._reviewListContainer.innerHTML = createReviewListTemplate(reviews || this._reviews);
  },

  _clearForm() {
    const formReview = document.querySelector('.review-input');
    formReview.name.value = '';
    formReview.review.value = '';
  },
};

export default ReviewsInitiator;
