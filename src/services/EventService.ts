import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id);
  },
  postEvent(event: object) {
    return apiClient.post('/events', event);
  },
};
