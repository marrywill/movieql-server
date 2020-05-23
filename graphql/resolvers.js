import {
	NowPlayingMovies,
	MovieDetail,
	TopRatedMovies,
	PopularMovies,
	SimilarMovies,
	SearchMovies,
	UpComingMovies,
} from './db'

const resolvers = {
	Query: {
		nowPlaying: () => NowPlayingMovies(),
		detailMovie: (_, { id }) => MovieDetail(id),
		topRated: () => TopRatedMovies(),
		popular: () => PopularMovies(),
		similar: (_, { id }) => SimilarMovies(id),
		searchMovies: (_, { title }) => SearchMovies(title),
		upComing: () => UpComingMovies(),
	},
}
export default resolvers
