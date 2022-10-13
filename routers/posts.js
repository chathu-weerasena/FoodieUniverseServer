const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Photos = require("../models").photo;
const Posts = require("../models").post;
const Users = require("../models").user;
const Restaurants = require("../models").restaurant;
const News = require("../models").news;

//??
// /posts/
//01- pphotos
// /posts/restaurants
// /posts/new

//Endpoint for the "list of available photos" sorted by "CreatedAt".
router.get("/photos", auth, async (req, res, next) => {
  try {
    const posts = await Posts.findAll({
      where: { postType: 1 },
      include: [{ model: Users }, { model: Photos }],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send({ postPhotos: posts });

    //console.log("Photos", photos);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Endpoint for the "list of Restaurants" sorted by "CreatedAt".
router.get("/restaurants", auth, async (req, res, next) => {
  try {
    const posts = await Posts.findAll({
      where: { postType: 2 },
      include: [{ model: Users }, { model: Restaurants }],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(posts);

    //console.log("Posts", posts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Endpoint for the "list of NEws" sorted by "CreatedAt".
router.get("/news", auth, async (req, res, next) => {
  try {
    const posts = await Posts.findAll({
      where: { postType: 3 },
      include: [{ model: Users }, { model: News }],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send(posts);

    //console.log("News", news);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/profile/feed", auth, async (req, res, next) => {
  try {
    const posts = await Posts.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Users },
        { model: News },
        { model: Restaurants },
        { model: Photos },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.status(200).send({ posts: posts });

    //console.log("News", news);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
