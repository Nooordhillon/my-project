import axios from "axios";

const movieData = async () => {
  const response = await axios.get(
    "https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodes"  

  );
  const users = response.data;
  console.log(users);
};