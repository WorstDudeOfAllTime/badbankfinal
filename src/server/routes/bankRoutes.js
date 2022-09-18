const express = require("express");
const bankController = require("./../controllers/bankController");
const router = express.Router();

router.route("/deleteAll").delete(bankController.deleteAll);
router.route("/getBalance/:email/:type").get(bankController.getBalance);
router.route("/depositFunds").post(bankController.depositFunds);
router.route("/withdrawFunds").post(bankController.withdrawFunds);
router.route("/transferFunds").post(bankController.transferFunds);
router.route("/accounts/:user/:type").get(bankController.getAccount);

module.exports = router;
