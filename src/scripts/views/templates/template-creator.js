/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line quotes
import API_ENDPOINT from "../../globals/api-endpoint";

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail"
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}" alt="${restaurant.name}"/>
</div>

  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>

    <h4>Address</h4>
    <p>${restaurant.address}</p>
    
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    
    <h4>Categories</h4>
    <div>${restaurant.categories
      .map(
        (category) => `
           <p>${category.name}</p>
    `
      )
  .join("")} </div>
      
  </div>

  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>

  <h3>Menu List</h3>
  <div class="restaurant-detail__menu-list">
          <div class="foods">
              <h4>Foods</h4>
              <ul class="restaurant-detail__foods">
                  ${restaurant.menus.foods.map((food) => `
      <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>
    `).join('')}
              </ul>
          </div>

          <div class="drinks">
              <h4>Drinks</h4>
              <ul class="restaurant-detail__drinks">
                  ${restaurant.menus.drinks.map((drink) => `
      <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>
    `).join('')}
              </ul>
          </div>
  
  <h3>Review Customer</h3>
  <div class="restaurant-detail__review">
  ${restaurant.customerReviews.map((customer) => `
        <div class="review-container">
          <i class="fa fa-user-circle customer-avatar font-secondary"></i>
          <div class="customer-name">
            <h4>${customer.name}</h4>
            <span class="customer-review-date">${customer.date}</span>
          </div>
          <p class="customer-review">${customer.review}</p>
        </div>
      `).join('')}
            </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}" title="${restaurant.name}"
           src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}">
      <div class="city">${restaurant.city}</div>
    </div>

    <div class="restaurant-item__header__rating">
    <p>Rating: <span class="restaurant-item__score">${restaurant.rating}</span></p>
    </div>
    
    <div class="restaurant-item__content">
    <h2><a href='/#/detail/${restaurant.id}'>${restaurant.name}</a></h2>
    <p class="restaurant-item_desc">${restaurant.description}</p>
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
