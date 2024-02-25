import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  price: z
    .number({ required_error: "Price is required" })
    .min(1, { message: "The price must be greater than 0" }),
  quantity: z.number({ required_error: "Quantity is required" }),
  description: z.string({ required_error: "Description is required" }),
});
