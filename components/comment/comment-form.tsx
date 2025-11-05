"use client";

import type { CommentFormProps } from "@/types/blog";

import { Turnstile } from "next-turnstile";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { CommentSchema, commentSchema } from "@/lib/validations/commentSchema";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Loader2 } from "lucide-react";

export function CommentForm({ postId, session }: CommentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [tooManyRequests, setTooManyRequests] = useState<boolean>(false);
  const [turnstileStatus, setTurnstileStatus] = useState<
    "required" | "success" | "error" | "expired"
  >("required");
  const [lastSubmitTime, setLastSubmitTime] = useLocalStorage<string>(
    "lastSubmitTime",
    "",
  );

  const [success, setSuccess] = useState<boolean>();
  const { toast } = useToast();

  useEffect(() => {
    const now = new Date().getTime();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 86400000) {
      setTooManyRequests(false);
    } else {
      setTooManyRequests(false);
    }
  }, [lastSubmitTime]);

  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      turnstile: "",
    },
  });

  async function onSubmit(values: CommentSchema) {
    if (isSubmitting || !session?.user) return;
    setIsSubmitting(true);

    if (tooManyRequests) {
      alert("You can only submit the form twice a day.");
      setSuccess(false);
      return;
    }

    if (turnstileStatus !== "success") {
      alert("Please complete the CAPTCHA.");
      toast({
        title: "Error",
        description: "Please complete the CAPTCHA.",
        variant: "destructive",
      });
      setSuccess(false);
      return;
    }

    const res = await fetch("/api/comment/submit", {
      method: "POST",
      body: JSON.stringify({ values, postId }),
    }).then((r) => r.json());

    if (!res.success) {
      toast({
        title: "Error",
        description:
          res.error || "Unable to submit comment. Please try again later.",
        variant: "destructive",
      });
      console.error("Validation failed on server", res.errors);
      setSuccess(false);
      return;
    }

    toast({
      title: "Success",
      description: "Your comment has been submitted successfully.",
    });
    form.reset();
    setLastSubmitTime(new Date().getTime().toString());
    setIsSubmitting(false);
    setSuccess(true);
  }

  const isDisabled =
    isSubmitting || tooManyRequests || !session || turnstileStatus === "error";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-fit flex-col items-end space-y-4"
      >
        <FormField
          control={form.control}
          name="comment"
          disabled={isDisabled}
          render={({ field }) => (
            <FormItem className="w-full">
              {/* <FormLabel>Leave a Comment</FormLabel> */}
              <FormControl>
                <Textarea
                  placeholder="Enter your comment..."
                  {...field}
                  className="resize-none border-border-soft bg-background focus:ring-border-soft"
                  rows={5}
                />
              </FormControl>
              <FormDescription className="text-muted">
                Your name and picture will be displayed with your comment.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {session?.user && (
          <FormField
            control={form.control}
            name="turnstile"
            disabled={isDisabled}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    retry="auto"
                    refreshExpired="auto"
                    theme="auto"
                    size="flexible"
                    className="mt-2 w-fit"
                    sandbox={process.env.NODE_ENV === "development"}
                    onError={() => {
                      setTurnstileStatus("error");
                      setSuccess(false);
                    }}
                    onExpire={() => {
                      setTurnstileStatus("expired");
                    }}
                    onLoad={() => {
                      setTurnstileStatus("required");
                    }}
                    onVerify={(token) => {
                      setTurnstileStatus("success");
                      field.onChange(token);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" disabled={isDisabled}>
          {isSubmitting ? (
            <Loader2 className="size-[1.2em] animate-spin" />
          ) : (
            "Submit Comment"
          )}
        </Button>
      </form>
    </Form>
  );
}
