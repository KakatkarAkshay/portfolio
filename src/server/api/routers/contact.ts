import { sendEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s-]+$/,
      "Name can only contain letters, spaces, and hyphens",
    ),
  email: z
    .string()
    .email("Valid email is required")
    .max(254, "Email must be less than 254 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

export const contactRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input, ctx }) => {
      // Get client IP for rate limiting
      const ip = ctx.headers?.get("x-forwarded-for") || "127.0.0.1";
      const { success, limit, reset, remaining } = await checkRateLimit(ip);

      if (!success) {
        throw new TRPCError({
          message: "Rate limit of 1 request per minute reached",
          code: "TOO_MANY_REQUESTS",
        });
      }

      // Sanitize inputs
      const sanitizedName = sanitizeHtml(input.name);
      const sanitizedEmail = sanitizeHtml(input.email);
      const sanitizedMessage = sanitizeHtml(input.message);

      // Send email using Resend
      const response = await sendEmail({
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      });

      return response;
    }),
});
