"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    package: "starter",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    // Validate with Zod
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Check localStorage for rate limiting
    const lastSubmission = localStorage.getItem("lastContactSubmission");
    if (lastSubmission) {
      const timeDiff = Date.now() - Number.parseInt(lastSubmission);
      const minutesPassed = timeDiff / (1000 * 60);

      if (minutesPassed < 5) {
        setErrorMessage(
          `Please wait ${Math.ceil(5 - minutesPassed)} minutes before submitting again.`,
        );
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Save submission time to localStorage
      localStorage.setItem("lastContactSubmission", Date.now().toString());

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        package: "starter",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              Get Started
            </Badge>
            <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
              Let's Build Something Amazing
            </h1>
            <p className="text-muted-foreground text-balance text-lg">
              Tell me about your project and I'll get back to you within 24
              hours
            </p>
          </div>

          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-600 dark:text-green-400"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-destructive/10 border-destructive/20 text-destructive mb-6 flex items-center gap-3 rounded-lg border p-4"
            >
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p>{errorMessage}</p>
            </motion.div>
          )}

          {/* Form Card */}
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company">Company / Project Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Acme Inc."
                />
              </div>

              {/* Package Selection */}
              <div className="space-y-3">
                <Label>
                  Select Package <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.package}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      package: value as ContactFormData["package"],
                    })
                  }
                  className="space-y-3"
                >
                  <div className="hover:border-primary flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors">
                    <RadioGroupItem
                      value="starter"
                      id="starter"
                      className="mt-1"
                    />
                    <Label htmlFor="starter" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Starter - $2,500</div>
                      <div className="text-muted-foreground text-sm">
                        Single page application, perfect for landing pages
                      </div>
                    </Label>
                  </div>

                  <div className="border-primary bg-primary/5 hover:border-primary flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors">
                    <RadioGroupItem
                      value="professional"
                      id="professional"
                      className="mt-1"
                    />
                    <Label
                      htmlFor="professional"
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        Professional - $5,000
                        <Badge variant="default" className="text-xs">
                          Popular
                        </Badge>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Multi-page websites with advanced features
                      </div>
                    </Label>
                  </div>

                  <div className="hover:border-primary flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors">
                    <RadioGroupItem
                      value="custom"
                      id="custom"
                      className="mt-1"
                    />
                    <Label htmlFor="custom" className="flex-1 cursor-pointer">
                      <div className="font-semibold">Custom - Let's Talk</div>
                      <div className="text-muted-foreground text-sm">
                        Tailored solutions for complex projects
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
                {errors.package && (
                  <p className="text-destructive text-sm">{errors.package}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Project Details <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  rows={6}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-muted-foreground text-center text-xs">
                By submitting this form, you agree to be contacted about your
                project
              </p>
            </form>
          </Card>

          {/* Additional Info */}
          <motion.div
            className="text-muted-foreground mt-8 text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>Response time: Within 24 hours</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
