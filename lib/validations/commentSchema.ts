import { z } from "zod";

export const commentSchema = z.object({
  comment: z
    .string()
    .min(30, { message: "Comment must be at least 30 characters long" })
    .max(300, { message: "Comment must be at most 300 characters long" }),
  turnstile: z.string().min(1, { message: "Please complete the CAPTCHA" }),
});

export type CommentSchema = z.infer<typeof commentSchema>;
