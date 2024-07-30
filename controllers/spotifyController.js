const axios = require("axios");
const { getAccessToken } = require("../utils/spotifyUtils");

const getGenres = async (req, res) => {
  try {
    const token = await getAccessToken();
    const url =
      "https://api.spotify.com/v1/recommendations/available-genre-seeds";
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(url, { headers });
    res.json(response.data.genres);
  } catch (error) {
    res.json(error);
  }
};

const getArtistsByGenre = async (req, res) => {
  const genre = req.params.genre;
  try {
    const token = await getAccessToken();
    const url = `https://api.spotify.com/v1/search?q=genre:"${genre}"&type=artist`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(url, { headers });
    res.json(response.data.artists.items);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching artists for genre "${genre}"` });
  }
};

module.exports = { getGenres, getArtistsByGenre };
