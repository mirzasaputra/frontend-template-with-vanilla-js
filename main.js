import { Router } from './src/core/handle-route';
import { BASE_URL, API_URL } from './src/config/config';
import "toastify-js/src/toastify.css";

window.BASE_URL = BASE_URL
window.API_URL = API_URL

const init = () => {
  Router();
}

init()