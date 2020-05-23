import { getMovies, getMovie } from './db'

const resolvers = {
	Query: {
		nowPlaying: () => getMovies(),
		detailMovie: (_, { id }) => getMovie(id),
	},
}
export default resolvers
