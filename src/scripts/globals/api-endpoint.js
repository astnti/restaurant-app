import CONFIG from './config';
 
const API_ENDPOINT = {
    RESTAURANT: `${CONFIG.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    RESTAURANT_IMAGE: `${CONFIG.BASE_URL}images/medium/`,
    ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};
 
export default API_ENDPOINT;