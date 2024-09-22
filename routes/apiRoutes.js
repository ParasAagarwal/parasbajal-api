const express = require("express");
const router = express.Router();
const {
  processPostRequest,
  getOperationCode,
} = require("../controllers/apiController");

router.post("/", processPostRequest);

router.get("/", getOperationCode);

module.exports = router;
