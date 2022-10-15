const { Router } = require("express");
const auth = require("../auth/middleware");
const router = new Router();

const Photos = require("../models").photo;
const Posts = require("../models").post;
const Users = require("../models").user;
const Restaurants = require("../models").restaurant;
const News = require("../models").news;
const Comments = require("../models").comment;

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
    res.status(200).send({ postRestaurants: posts });

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
    res.status(200).send({ postNews: posts });

    //console.log("News", news);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//endroute to "profile feed"
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

// End Point for the " Update a post"
router.patch("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const { title, content, image, name, address, endDate } = req.body;

  const post = await Posts.findByPk(id);
  if (!post.userId === req.user.id) {
    return res
      .status(403)
      .send("You don't have permission to change the space");
  }
  const updatedPost = await Posts.findByPk(post.id, {
    include: [{ model: Photos }, { model: Restaurants }, { model: News }],
  });

  updatedPost.update({
    title: title,
    content: content,
    image: image,
    name: name,
    address: address,
    endDate: endDate,
  });
  console.log(updatedSpace);
  return res.status(200).send({ post: updatedPost });
});

//04- Delete a post (/delete with .destroy)
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.body;

    const post = await Posts.findByPk(id, [
      { include: Photos },
      { include: Restaurants },
      { include: News },
    ]);
    if (!post) {
      return res.status(404).send("Post is no longer available");
    }
    if (post.userId !== req.user.id) {
      return res
        .status(401)
        .send("You don't have permission to delete selected post");
    }

    await post.destroy();
    res.send("Deleted", id);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//adding a "Comment"
router.post("/:id/comments", auth, async (req, res, next) => {
  const post = await Posts.findByPk(req.params.id);

  if (post === null) {
    res.status(400).send("This post is no longer availble");
  }

  const { content } = req.body;

  const newComment = await Comments.create({
    content,
    userId: req.user.id,
    postId: req.params.id,
  });
  res.status(201).send({ comment: newComment });
});

module.exports = router;
