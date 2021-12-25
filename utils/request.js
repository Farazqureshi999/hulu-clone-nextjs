const API_KEY = process.env.API_KEY;
// console.log('api',API_KEY);


export default{
    fetchTrending:{
        key:'fetchTrending',
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        key:'fetchTopRated',
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        key:'fetchActionMovies',
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        key:'fetchComedyMovies',
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        key:'fetchHorrorMovies',
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        key:'fetchRomanceMovies',
        title:'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        key:'fetchMystery',
        title:'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    }
}