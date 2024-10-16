const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be at lest of 3 chars" })
    .max(255, { message: "email must be at lest of 255 chars" })
    .regex(/^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[gG][mM][aA][iI][lL]\.com$/, {
      message: "The email address must be a valid @gmail.com address.",
    }),

  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "password must be at lest of 8 chars" })
    .max(1024, { message: "password must be at lest of 1024 chars" })
    .regex(/(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~`])/, {
      message: "Password must contain at least one special character.",
    }),
});

// Creating an object Schema

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Username must only contain alphabetic characters and spaces.",
    })
    .min(3, { message: "name must be at lest of 3 chars" })
    .max(255, { message: "name must be at lest of 255 chars" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(11, { message: "phone must be at lest of 11 chars" })
    .max(15, { message: "phone must be at lest of 11 chars" })
    .regex(/^(?:\+88)?01[3-9]\d{8}$/, {
      message:
        "Phone number must be in the format (+88)-01[3-9] followed by 8 digits.",
    }),
});

module.exports = { signupSchema, loginSchema };
