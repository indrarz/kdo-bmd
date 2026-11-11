const { Router } = require("express");
const { authenticateToken } = require("../helper/jwt");
const instansiController = require("../controller/instansiController");

const router = Router();

router.get("/", instansiController.getAll);
router.get("/:id", instansiController.getOne);
router.post("/", authenticateToken, instansiController.create);

module.exports = router;
