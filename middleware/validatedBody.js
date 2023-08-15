const { HttpError } = require("../helpers");

const validatedBody = (schema) => {
  const func = (req, res, next) => {

    if (Object.keys(req.body).length === 0) {
      let message = "";
      if (req.method === "PUT") {
        message = "missing fields";
      } else if (req.method === "PATCH") {
        message = "missing field favorite";
      }
      next(HttpError(400, message));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error)
      const keyName = error.details[0].message;
      next(HttpError(400, ` ${keyName} `));
    }
    next();
  };
  return func;
};

module.exports = { validatedBody };
