Feature('Reviewing a Restaurant');

Scenario('writing a review to a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item a');

  const firstRestaurant = locate('.restaurant-item a').first();
  I.click(firstRestaurant);

  I.see('Add Review', '.review-input__title');
  I.seeElement('form');
  I.seeElement('input[name="name"]');
  I.seeElement('textarea[name="review"]');
  I.seeElement('button[type="submit"]');

  const reviewName = 'Billy';
  const reviewDesc = 'What a lovely and cozy resto!';
  I.fillField('input[name="name"]', reviewName);
  I.fillField('textarea[name="review"]', reviewDesc);

  I.click('button[type="submit"]');

  I.see(reviewName, '.review__title');
  I.see(reviewDesc, '.review__review');
});
