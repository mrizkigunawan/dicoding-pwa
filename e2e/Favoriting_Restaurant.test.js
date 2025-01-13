const assert = require('assert');

Feature('Favoriting a Restaurant');

Scenario('favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You have not added any restaurant to favorite yet.', '.restaurant__list-state');

  I.amOnPage('/');

  I.seeElement('.restaurant-item a');

  const firstRestaurant = locate('.restaurant-item a').first();
  const restaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item a');

  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-item a');

  assert.strictEqual(restaurantName, favoritedRestaurantName);
});

Scenario('favoriting more than one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item a');

  const totalFavorites = 3;
  for (let i = 1; i <= totalFavorites; i++) {
    I.click(locate('.restaurant-item a').at(i));

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');

  const numberOfFavoritedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');

  assert.strictEqual(numberOfFavoritedRestaurants, totalFavorites);
});
