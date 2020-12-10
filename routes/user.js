var express = require('express');
var router = express.Router();

var requests = require('../requests/user_requests');

// Requête GET
router.get('/create', async function (req, res) {
  console.log("get called");

  const result = await requests.createUser(req.query);
  if (result.err){
    return res.status(400).json()
  }
  res.json(result);
})

// Requête POST
router.get('/login', function (req, res) {
  console.log("post called");
  res.send(req.params);
})

// Requête Recherche utilisateur
router.get('/search', function (req, res) {
  console.log("search called");
  requests.searchUser(req.query);
  console.log(req.query);
  console.log(res);
})

module.exports = router;
