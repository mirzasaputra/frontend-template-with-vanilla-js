const PRODUCTION_URL = 'http://localhost:8000';
const DEVELOPMENT_URL = 'http://localhost:8000';

// prettier-ignore
export const BASE_URL = process.env.NODE_ENV == 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;
export const API_URL = `${BASE_URL}/api/v1`;