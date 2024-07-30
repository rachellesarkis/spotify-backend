const express = require("express");
const router = express.Router();
const {
  getGenres,
  getArtistsByGenre,
} = require("../controllers/spotifyController");

router.get("/genres", getGenres);

router.get("/artists/:genre", getArtistsByGenre);

module.exports = router;
