import fetch from 'node-fetch'
import { Secret } from '../Secret'
const API_ALL_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Secret}&language=ko-KR&page=1`

export const getMovies = () => {
	let REQUEST_URL = API_ALL_URL
	return fetch(REQUEST_URL)
		.then((res) => res.json())
		.then((json) => json.results)
}

export const getMovie = (id) => {
	let API_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${Secret}&language=ko-KR`
	return fetch(API_DETAIL_URL).then((res) => res.json())
}
