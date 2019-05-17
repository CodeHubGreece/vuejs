let app = new Vue({
	el: '#app',
	data: {
		movies: []
	},
	methods: {
		getPlayingNowMovies() {
			const API_KEY = '2873307da26a0fd62a223953c4f74310';
			const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
			const request = new Request(URL);

			fetch(request).then(response => {
				if (response.status === 200) {
					return response.json();
				} else {
					throw new Error('Something went wrong on api server!');
				}
			}).then(response => {
				// Update Movies
				this.movies = response.results;
			}).catch(error => {
				console.error(error);
			});
		}
	},
	created() {
		/*
		Called synchronously after the instance is created.
		At this stage, the instance has finished processing the options
		which means the following have been set up:
		data observation, computed properties, methods, watch/event callbacks.
		However, the mounting phase has not been started
		 */
		this.getPlayingNowMovies();
	},
	beforeMount() {

		/*
		Called right before the mounting begins:
		the render function is about to be called for the first time.
		*/
		console.log(this.movies);
	},
	mounted() {

		/*
		Note that mounted does not guarantee
		that all child components have also been mounted.
		*/

		this.$nextTick().then(() => { // Wait until the entire view has been rendered
			console.log(this.movies);
		});
	},
	updated() {

		/*
		Note that updated does not guarantee
		that all child components have also been mounted.
		*/

		this.$nextTick().then(() => { // Wait until the entire view has been re-rendered
			console.log(this.movies);
		});
	}
});
