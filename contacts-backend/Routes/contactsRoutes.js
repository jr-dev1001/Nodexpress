const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../Controllers/contactsController");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
