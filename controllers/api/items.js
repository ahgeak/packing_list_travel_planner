const router = require("express").Router();
const { User, List } = require("../../models");
const withAuth = require("../../utils/auth");

// create_list get request will render the create list page
router.get("/:id", withAuth, async (req, res) => {
    let listId = req.params.id;

// query for appropriate models
    let list = await List.findOne({
      where: {id: listId}
    });

    // console.log(JSON.parse(list.items));
  
  // save the return query(data) to variable and pass it to our render
  return res.render("items", {listItems: JSON.parse(list.items), listName: list.name});
});

module.exports = router;
