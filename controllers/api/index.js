const router = require('express').Router();

const createRouter = require("./create");
const storedRouter = require("./stored");
const userRouter = require("./user");
const itemsRouter = require("./items");
const loginRouter = require("./login");
const signupRouter = require("./signup");

router.use("/create", createRouter);
router.use("/stored", storedRouter);
router.use("/user", userRouter);
router.use("/items", itemsRouter);
router.use("/login", loginRouter);
router.use("/signup", signupRouter);

module.exports = router;
