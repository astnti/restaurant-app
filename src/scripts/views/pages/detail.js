import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="main">
        <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
        <section id="detail-rest"></section>
        <div class="form-review">
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn">Submit</button>
          </form>
        </div>  
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
  },
};

export default Detail;
