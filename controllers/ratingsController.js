const router = require("express").Router();
const Ratings = require("../db").import("../models/ratings");

router.get("/", (req, res) => {
  // console.log(req.user);
  Ratings.findAll({
    where: {
      owner_id: req.user.id,
    },
  })
    .then((ratings) =>
      res.status(200).json({
        ratings: ratings,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

//post
router.post("/", (req, res) => {
  //   console.log("req.user.id", req.user.id);
  const ratingFromRequest = {
    showName: req.body.showName,
    showType: req.body.showType,
    showRating: req.body.showRating,
    myRating: req.body.myRating,
    owner_id: req.user.id,
  };
  Ratings.create(ratingFromRequest)
    .then((rating) =>
      res.status(200).json({
        rating: rating,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

router.get("/:id", (req, res) => {
  Ratings.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((rating) =>
      res.status(200).json({
        rating: rating,
      })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

//update
router.put("/:id", (req, res) => {
  Ratings.update(req.body.rating, {
    where: {
      id: req.params.id,
    },
  })
    .then((rating) =>
      res.status(200).json({
        rating: rating,
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
  Ratings.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((rating) =>
      res.status(200).json({
        rating: rating,
      })
    )
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

module.exports = router;
