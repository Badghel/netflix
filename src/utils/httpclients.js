const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2Y0YmM0ZmIyYjJkMGRmN2FiZjMwODZiNGM2N2RhMSIsInN1YiI6IjYyMGM5NjNhYzA0OGE5MDAxYjA2MWQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlD4gvnT3hmEBkGHXrCttAfnoIASSt3x2IRoJSSUoGo",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) =>
      result.json());
}