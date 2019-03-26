import axios from 'axios';
const http = axios.create({
    baseURL:"http://localhost:3000/API"
});

export default class MoviesService {

    getAll() {
        return http.get('/movies');  
    }  
}


 export const moviesService = new MoviesService();