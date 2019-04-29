const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index")
});

module.exports = router;

// router.get('/', userController.index)

// router.get('/new', userController.new)

// router.get("/cart", userController.cart)

// router.get('/:id', userController.show)

// router.post('/', userController.create)

// router.get("/:id/edit", userController.edit)

// router.put("/:id", userController.update)

// router.delete('/:id', userController.delete)