const router = require("express").Router();

// I added these to api index.js
// const createRouter = require("./api/create");
// const storedRouter = require("./api/stored");
// const userRouter = require("./api/user");
// const itemsRouter = require("./api/items");
// const loginRouter = require("./api/login");
// const signupRouter = require("./api/signup");

// I added these to api index.js
// router.use("/api/create", createRouter);
// router.use("/api/stored", storedRouter);
// router.use("/api/user", userRouter);
// router.use("/api/items", itemsRouter);
// router.use("/api/login", loginRouter);
// router.use("/api/signup", signupRouter);

// added these 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// added these 
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// user get route will render the login page
// router.get("/", async (req, res) => {
//   res.render("user");
// });

// router.get("/signup", async (req, res) => {
//   res.render("signup");
// });

// router.get("/login", async (req, res) => {
//   res.render("login");
// });

// router.get("/create", async (req, res) => {
//   res.render("create");
// });

// router.get("/stored", async (req, res) => {
//   return res.render("stored");
// });

// router.get("/user", async (req, res) => {
//   res.render("user");
// });

module.exports = router;
