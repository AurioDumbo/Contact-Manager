const express = require("express")
const router = express.Router()
const {getContact, getContacts
    , postContact, putContact, deleteContact} = require("../controllers/controller") 

router.route("/").get(getContacts)
router.route("/:id").get(getContact)
router.route("/").post(postContact)
router.route("/:id").put(putContact)
router.route("/:id").delete(deleteContact)

module.exports = router
