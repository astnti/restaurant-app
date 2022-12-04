import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <main id="mainContent" class="main-resto_container">
    <section class="content">
      <h2 tabindex="0" class="main-resto_label">
        Explore Restaurant
      </h2>
      <div id="main-resto_list" class="list-resto"></div>
    </section>
  </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#main-resto_list');

    // eslint-disable-next-line no-unused-vars
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
