import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
      return `
      <div class="main">
      <section class="content">
        <h2 tabindex="0" class="main-resto_label">Favorite</h2>
        <div id="favorite-restaurant" class="list-resto"></div>
      </section>
      </div>
      `;
    },
   
    async afterRender() {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      const restaurantContainer = document.querySelector('#favorite-restaurant');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    },
  };
   
  export default Favorite;