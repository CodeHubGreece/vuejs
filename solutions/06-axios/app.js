let app = new Vue({
    el: '#app',
    data: {
        movies: []
    },
    methods: {
        async getPlayingNowMovies() {
            try {
                const API_KEY = '2873307da26a0fd62a223953c4f74310';
                const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
                const response = await axios.get(URL);
                if (response) {
                    let {data} = response
                    this.movies = data.results;
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getPlayingNowMovies();
    },
});
