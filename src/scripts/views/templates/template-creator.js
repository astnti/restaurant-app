/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line quotes
import API_ENDPOINT from "../../globals/api-endpoint";

const createRestaurantDetailTemplate = (restaurant) => `
<div tabindex="0" class="detail"
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}" alt="${restaurant.name}"/>
</div>

  <div class="restaurant__info">
    <h3>Information</h3>
    <h4 tabindex="0">City</h4>
    <p tabindex="0">${restaurant.city}</p>

    <h4 tabindex="0">Address</h4>
    <p tabindex="0">${restaurant.address}</p>
    
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">${restaurant.rating}</p>
    
    <h4 tabindex="0">Categories</h4>
    <div tabindex="0">${restaurant.categories
      .map(
        (category) => `
           <p>${category.name}</p>
    `
      )
  .join("")} </div>
      
  </div>

  <div tabindex="0" class="restaurant__overview">
    <h3 tabindex="0">Overview</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>

  <h3 tabindex="0">Menu List</h3>
  <div class="restaurant-detail__menu-list">
          <div class="foods">
              <h4 tabindex="0">Foods</h4>
              <ul tabindex="0" class="restaurant-detail__foods">
                  ${restaurant.menus.foods.map((food) => `
      <li><i tabindex="0" class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
    `).join('')}
              </ul>
          </div>

          <div class="drinks">
              <h4 tabindex="0">Drinks</h4>
              <ul tabindex="0" class="restaurant-detail__drinks">
                  ${restaurant.menus.drinks.map((drink) => `
      <li><i tabindex="0" class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
    `).join('')}
              </ul>
          </div>
  
  <h3 tabindex="0">Review Customer</h3>
  <div class="restaurant-detail__review">
  ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <i class="fa fa-user-circle customer-avatar font-secondary"></i>
          <div class="customer-name">
            <h4 tabindex="0">${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p tabindex="0" class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
            </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div tabindex="0" class="restaurant-item">
    <div tabindex="0" class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster" alt="${restaurant.name}" title="${restaurant.name}"
           src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}">
      <div tabindex="0" class="city">${restaurant.city}</div>
    </div>

    <div class="restaurant-item__header__rating">
    <p tabindex="0">Rating: <span class="restaurant-item__score">${restaurant.rating}</span></p>
    </div>
    
    <div class="restaurant-item__content">
    <h2 tabindex="0"><a href='/#/detail/${restaurant.id}'>${restaurant.name}</a></h2>
    <p tabindex="0" class="restaurant-item_desc">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
