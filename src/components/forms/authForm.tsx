"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { mentorToast } from "../toast";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const router = useRouter();
  const schema = mode === "login" ? LoginSchema : RegisterSchema;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues:
      mode === "login"
        ? { email: "", password: "" }
        : { fullName: "", email: "", password: "" },
  });

  const fields =
    mode === "login"
      ? ["email", "password"]
      : ["fullName", "email", "password"];

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      // TODO: Implement actual authentication logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      mentorToast(
        `${mode === "login" ? "Login" : "Registration"} successful`,
        `${mode === "login" ? "Welcome Back!" : "Welcome!"}`,
        "success"
      );

      // Handle successful authentication
      if (mode === "register") {
        router.push("/onboarding");
      }
      // For now just logging the data
      console.log(data);
    } catch (error) {
      mentorToast(
        "Error",
        `Failed to ${mode === "login" ? "login" : "register"}`,
        "error"
      );
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as keyof typeof form.formState.defaultValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{fieldName}</FormLabel>
                <FormControl>
                  <Input
                    type={fieldName === "password" ? "password" : "text"}
                    placeholder={fieldName}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting
            ? mode === "login"
              ? "Logging in..."
              : "Registering..."
            : mode === "login"
            ? "Login"
            : "Register"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
