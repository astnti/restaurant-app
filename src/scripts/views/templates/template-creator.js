import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant__poster" src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}" alt="${restaurant.name}"/>
<div class="restaurant__info">
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <h4>address : <span>${restaurant.address}</span></h4>
  <h4>City : <span>${restaurant.city}</span></h4>
  <h4>Rating : <span>${restaurant.rating}</span></h4>
</div>

<h3 class="titlemenu">Information</h3>

<div class="menu">

    <div class="food">
    <h4>Food</h4>
    <ul>${restaurant.menus.foods
    .map(
      (food) => `
      <li>${food.name}</li>
      `,
    )
    .join('<br>')}</ul>
    </div>
    
    <div class="drink">
    <h4>Drink</h4>
    <ul>${restaurant.menus.drinks
    .map(
      (drink) => `
    <li>${drink.name}</li>
    `,
    )
  .join('<br>')}</ul>
    </div>
</div>
    
<div class="restaurant__overview">

  <div class="categories">
    <h4>Categories</h4>
    <p>${restaurant.categories
      .map(
        (category) => `
           <p>${category.name}</p>
    `,
      )
  .join('')} <p>
  </div>
      
 
  <div class="description">
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>

  <div class="review">
  <h4>Reviews</h4>
  <p>${restaurant.customerReviews
    .map(
      (review) => `
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
    `,
    )
    .join('<br>')}
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}" title="${restaurant.name}"
           src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}">
    </div>
    
    <div class="restaurant-item__content">
    <h2 class="post_title"><a href='/#/detail/${restaurant.id}'>${restaurant.name}</a></h2>
    <p class="restaurant_city">City: ${restaurant.city}</p>
    <p class="restaurant_city">Rating: ${restaurant.rating}</p>
    <p class="restaurant_descripstion">${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, 
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};