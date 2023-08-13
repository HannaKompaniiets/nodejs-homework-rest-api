const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validatedBody } = require("../../middleware");
const { isValidId } = require("../../middleware");
const { schemas } = require("../../models/contact");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validatedBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validatedBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validatedBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
