const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2M2Mjg2Yjc0MjQ5MDcyNzgzMTVhYTAyMDQ4NTFmZiIsIm5iZiI6MTc4MDY5MDQ3MC4xNzUsInN1YiI6IjZhMjMyZTI2ZDE5YjIyZGZhMmYzM2ZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zH8VNIGFV9u4CyTS1XYtlHGElg9Ed1C2urAB7fli1jk";

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    },
  );

  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    },
  );
  
  const data = await response.json();

  return data.results;
};
