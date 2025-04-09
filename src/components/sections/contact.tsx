"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import type { AnyFieldApi } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="mt-1 text-sm text-red-500">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const sendEmail = api.contact.sendEmail.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      setFormError(error.message);
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await sendEmail.mutateAsync(value);
      } catch (error) {
        // Error handling is done in the mutation callbacks
      }
    },
  });

  return (
    <section id="contact" className="py-12 md:py-24 w-full">
      <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[700px] text-center text-lg text-muted-foreground"
        >
          Have a question or want to work together? Reach out to me directly or
          use the form below.
        </motion.p>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FiMail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Email
                    </p>
                    <Link
                      href="mailto:me@kakatkarakshay.dev"
                      className="font-medium hover:text-primary"
                    >
                      me@kakatkarakshay.dev
                    </Link>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FiPhone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Phone
                    </p>
                    <Link
                      href="tel:+919172932468"
                      className="font-medium hover:text-primary"
                    >
                      +91 9172932468
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold">Connect on Social</h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/KakatkarAkshay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-card-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
                  >
                    <FiGithub className="h-6 w-6" />
                  </motion.div>
                </Link>
                <Link
                  href="https://linkedin.com/in/akshay-kakatkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-card-foreground shadow-sm hover:bg-primary hover:text-primary-foreground"
                  >
                    <FiLinkedin className="h-6 w-6" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-bold">Send a Message</h3>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold">Message Sent!</h4>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
                className="space-y-4"
              >
                {formError && (
                  <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
                    {formError}
                  </div>
                )}

                <form.Field
                  name="name"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Name is required" : undefined,
                  }}
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Your Name
                      </label>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="John Doe"
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                />

                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) =>
                      !value
                        ? "Email is required"
                        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            value
                          )
                        ? "Invalid email address"
                        : undefined,
                  }}
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Your Email
                      </label>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="john@example.com"
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                />

                <form.Field
                  name="message"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Message is required" : undefined,
                  }}
                  children={(field) => (
                    <div className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                          field.handleChange(e.target.value)
                        }
                        placeholder="I'd like to discuss a project..."
                        rows={4}
                      />
                      <FieldInfo field={field} />
                    </div>
                  )}
                />

                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button
                      type="submit"
                      disabled={
                        !canSubmit || isSubmitting || sendEmail.isPending
                      }
                      className="w-full"
                    >
                      {isSubmitting || sendEmail.isPending ? (
                        <>
                          <svg
                            className="mr-2 h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  )}
                />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
