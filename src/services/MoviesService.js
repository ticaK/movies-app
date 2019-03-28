import axios from 'axios';
const http = axios.create({
    baseURL: "http://localhost:3000/API"
});
const ENDPOINTS = {
    MOVIES: '/movies'
}
export default class MoviesService {

    getAll() {
        return http.get(ENDPOINTS.MOVIES);
    }
    // napomena:getAll() najcesce nazivamo index()

}

export const moviesService = new MoviesService();