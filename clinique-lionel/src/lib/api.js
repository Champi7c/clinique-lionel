import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: { 'Accept': 'application/json' },
});

export const fetchHeroSlides  = () => api.get('/hero-slides').then(r => r.data);
export const fetchServices    = () => api.get('/services').then(r => r.data);
export const fetchStats       = () => api.get('/stats').then(r => r.data);
export const fetchPartners    = () => api.get('/partners').then(r => r.data);
export const fetchSettings    = () => api.get('/settings').then(r => r.data);
export const sendContact      = (data) => api.post('/contact', data).then(r => r.data);
