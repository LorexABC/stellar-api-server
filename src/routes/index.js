const express = require("express");
const stellarExpertRouter = require('./stellar.expert.route')

const router = express.Router();

const defaultRoutes = [
  {
    path: "/stellar",
    route: stellarExpertRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
