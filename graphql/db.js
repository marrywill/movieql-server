import axios from 'axios'
import { Secret } from '../Secret'
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing'
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated'
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular'
const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming'
const DETAIL_URL = 'https://api.themoviedb.org/3/movie/'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

export const NowPlayingMovies = async () => {
	const {
		data: { results },
	} = await axios(NOW_PLAYING_URL, {
		params: {
			api_key: Secret,
			language: 'ko-KR',
			page: 1,
		},
	})
	return results
}
export const TopRatedMovies = async () => {
	const {
		data: { results },
	} = await axios(TOP_RATED_URL, {
		params: {
			api_key: Secret,
			language: 'ko-KR',
			page: 1,
		},
	})
	return results
}

export const PopularMovies = async () => {
	const {
		data: { results },
	} = await axios(POPULAR_URL, {
		params: {
			api_key: Secret,
			language: 'ko-KR',
			page: 1,
		},
	})
	return results
}

export const UpComingMovies = async () => {
	const {
		data: { results },
	} = await axios(UPCOMING_URL, {
		params: {
			api_key: Secret,
			language: 'ko-KR',
			page: 1,
		},
	})
	return results
}

export const MovieDetail = async (id) => {
	const { data } = await axios({
		url: DETAIL_URL + `${id}`,
		params: {
			api_key: Secret,
			language: 'ko-KR',
		},
	})
	return data
}
export const SimilarMovies = async (id) => {
	const {
		data: { results },
	} = await axios({
		url: DETAIL_URL + `${id}/similar`,
		params: {
			api_key: Secret,
			language: 'ko-KR',
			page: 1,
		},
	})
	return results
}

export const SearchMovies = async (title) => {
	const {
		data: { results },
	} = await axios(SEARCH_URL, {
		params: {
			api_key: Secret,
			language: 'ko-KR',
			query: title,
			page: 1,
			include_adult: true,
		},
	})
	return results
}
