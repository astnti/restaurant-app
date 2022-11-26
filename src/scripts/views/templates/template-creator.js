/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line quotes
import CONFIG from "../../globals/config";
 
const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
            <div class="restaurant-item_content">
                <img class="restaurant-item_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0"/>
              <div class="city">${restaurant.city}</div>
              <div class="restaurant-item__rating">
                <p>Rating: <span class="restaurant-item__score">${restaurant.rating}</span></p>
              </div>
              </div>
              <div class="restaurant-item__content">
              <h2><a href=${'/detail/${restaurant.id}'}>${restaurant.name}</a></h2>
              <p class="restaurant-item_desc" alt="deskripsi restoran">${restaurant.description}</p>
              </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
<div class="container-info">
<div class="img-container">
<img class="restaurant_image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
</div>

<ul class="restaurant-info">
  <li class="restaurant-name">
    <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.name}</p>
    </li>

  <li class="restaurant-address">
    <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
    </li>

  <li class="restaurant-rating">
    <i title="ratings" class="fas fa-star icon-primary"></i>
    <p class="detail-name-address-rating">${restaurant.rating}</p>
  </li>

  <h4> Description: </h4>
  <li><p class="detail-desc">${restaurant.description}</p></li>

  <li class="restaurant-category">${restaurant.categories.map((category) => ` 
  <span class="category">${category.name}</span> 
  `).join('')}
  </li>
</ul>
</div>
    
    <h3>Menu List</h3>
    <div class="restaurant-detail__menu-list">
            <div class="foods">
                <h4>Foods</h4>
                <hr />
                <ul class="restaurant-detail__foods">
                    ${restaurant.menus.foods.map((food) => `
        <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
      `).join('')}
                </ul>
            </div>
            
            <div class="drinks">
                <h4>Drinks</h4>
                <hr />
                <ul class="restaurant-detail__drinks">
                    ${restaurant.menus.drinks.map((drink) => `
        <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
      `).join('')}
                </ul>
            </div>
        </div>

  //   <h3>Review Customer</h3>
  //   <div class="restaurant-detail__review">
  //           ${restaurant.customerReviews.map((customer) => `
  //   <div class="review-container">
  //   <i class="fa fa-user-circle customer-avatar font-secondary"></i>
  //     <div class="customer-name">
  //       <h4>${customer.name}</h4>
  //       <span class="customer-review-date">${customer.date}</span>
  //     </div>
  //     <p class="customer-review">${customer.review}</p>
  //   </div>
  // `).join('')}
  //   </div>
</div>
`;

// eslint-disable-next-line object-curly-newline, max-len
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };