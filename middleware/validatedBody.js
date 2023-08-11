const { HttpError } = require("../helpers");

const validatedBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      const keyName = error.details[0].message;
      next(HttpError(400, ` ${keyName} `));
    }
    next();
  };
  return func;
};

module.exports = { validatedBody };
