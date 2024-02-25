import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  lastName: z.string({
    required_error: "Last Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Paswords must me at least 6 characters",
    }),
  phoneNumber: z.string({
    required_error: "Phone Number is required",
  }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid Email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Paswords must me at least 6 characters",
    }),
});
