const express = require("express");

const router = express.Router();

const stellarExpertApi = "https://api.stellar.expert/explorer/";

router.post("/account", async (req, res) => {
  const { type, accountId } = req.body;

  const params = `${type}/account/${accountId}`;
  const promis = await fetch(stellarExpertApi + params);
  const result = await promis.json();

  res.send(result);
});

router.post("/account-value", async (req, res) => {
  const { type, accountId } = req.body;

  const params = `${type}/account/${accountId}/value`;
  const promis = await fetch(stellarExpertApi + params);
  const result = await promis.json();

  res.send(result)
});

module.exports = router;
