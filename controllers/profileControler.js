const router = require("express").Router();
const Profiles = require("../db").import("../models/profile");

//getting all that was made
router.get("/", (req, res) => {
  Profiles.findAll({
    where: {
      profile_id: req.user.id,
    },
  })
    .then((profiles) =>
      res.status(200).json({
        profiles: profiles,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});
//posting new profile
router.post("/", (req, res) => {
  const profileFromRequest = {
    userBio: req.body.userBio,
    favGenreOne: req.body.favGenreOne,
    favGenreTwo: req.body.favGenreTwo,
    favGenreThree: req.body.favGenreThree,
    favArtistOne: req.body.favArtistOne,
    favArtistTwo: req.body.favArtistTwo,
    favArtistThree: req.body.favArtistThree,
    profile_id: req.user.id,
  };
  Profiles.create(profileFromRequest)
    .then((profile) =>
      res.status(200).json({
        profile: profile,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});
//getting by id
router.get("/:id", (req, res) => {
  Profiles.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((profile) =>
      res.status(200).json({
        profile: profile,
      })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// update;
router.put("/:id", (req, res) => {
  Profiles.update(req.body.profile, {
    where: {
      id: req.params.id,
    },
  })
    .then((profile) =>
      res.status(200).json({
        profile: profile,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//delete
router.delete("/:id", (req, res) => {
  Profiles.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((profile) =>
      res.status(200).json({
        profile: profile,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
