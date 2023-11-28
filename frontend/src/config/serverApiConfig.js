export const API_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE == 'remote'
    ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
    : 'https://backend-hellow.prod.city/api/';
export const BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER
    : 'https://backend-hellow.prod.city/';
export const DOWNLOAD_BASE_URL =
  import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.VITE_BACKEND_SERVER + 'download/'
    : 'https://backend-hellow.prod.city/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
export const URL_FEEDBACK_IA = 
import.meta.env.PROD || import.meta.env.VITE_DEV_REMOTE
    ? import.meta.env.FEEDBACK_IA_SERVER 
    : 'https://feedback-ia.prod.city/api/';

