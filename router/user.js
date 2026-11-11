const { Router } = require("express");
const { authenticateToken } = require("../helper/jwt");
const userController = require("../controller/userController");

const router = Router();

router.get("/", authenticateToken, userController.getOne);
router.put("/update", authenticateToken, userController.update);

module.exports = router;
