const router = require("express").Router();

// create_list get request will render the create list page
router.get("/", async (req, res) => {
  return res.render("items");
});

// this will be used to get the ID and render the list on the screen
router.get("/:id", async (req, res) => {
  // List.query
  // response.render the specific item to item handlebar
  return res.render("items");
});

// we will need a UUID for each unique page for this

module.exports = router;
