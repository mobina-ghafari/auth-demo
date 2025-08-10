"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";

const phoneSchema = z.object({
  phone: z
    .string()
    .regex(
      /^09\d{9}$/,
      "The phone number must be 11 digits and start with 09."
    ),
});

type FormData = z.infer<typeof phoneSchema>;

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const json = await res.json();

      const userData = json.results[0];
      login(userData);

      router.push("/dashboard");
    } catch (error) {
      alert("Login error, please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <Input
        label="Mobile Number"
        placeholder="09xxxxxxxxx"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Button type="submit" disabled={isSubmitting}>
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
