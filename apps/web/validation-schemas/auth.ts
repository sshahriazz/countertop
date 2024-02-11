import Joi from "joi";

export const loginValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email cannot be empty",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is a required field",
    }),
  password: Joi.string()
    .min(8)
    .message("Password must be at least 8 characters long.")
    .required()

    .pattern(new RegExp("[0-9]"), { name: "numbers" })
    .message("Password must contain at least one digit.")
    .pattern(new RegExp("[A-Z]"), { name: "uppercase letters" })
    .message("Password must contain at least one uppercase letter.")
    .pattern(new RegExp("[a-z]"), { name: "lowercase letters" })
    .message("Password must contain at least one lowercase letter.")
    .pattern(new RegExp("[!@#$%^&*()]"), { name: "special characters" })
    .message("Password must contain at least one special character."),
});
export const registerValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email cannot be empty",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is a required field",
    }),
  password: Joi.string()
    .min(8)
    .message("Password must be at least 8 characters long.")
    .required()

    .pattern(new RegExp("[0-9]"), { name: "numbers" })
    .message("Password must contain at least one digit.")
    .pattern(new RegExp("[A-Z]"), { name: "uppercase letters" })
    .message("Password must contain at least one uppercase letter.")
    .pattern(new RegExp("[a-z]"), { name: "lowercase letters" })
    .message("Password must contain at least one lowercase letter.")
    .pattern(new RegExp("[!@#$%^&*()]"), { name: "special characters" })
    .message("Password must contain at least one special character."),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
});
