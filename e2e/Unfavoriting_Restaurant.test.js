const assert = require('assert');

Feature('Unfavoriting a Restaurant');

Scenario('unfavoriting a restaurant', async ({ I }) => {
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

  I.click('.restaurant-item a');

  I.see(favoritedRestaurantName, 'h2.detail-restaurant__title');

  I.seeElement('#unfavoriteButton');
  I.click('#unfavoriteButton');

  I.amOnPage('/#/favorite');
  I.see('You have not added any restaurant to favorite yet.', '.restaurant__list-state');
});
