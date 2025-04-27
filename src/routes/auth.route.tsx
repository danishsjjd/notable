import SpinnerAnimationSvg from "@/assets/icons/spinner-animation-svg";
import { useAppForm } from "@/hooks/useAppForm";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  createFileRoute,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";
import { useEffect } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
});

function AuthLayout() {
  const { signIn } = useAuthActions();
  const routerState = useRouterState();

  const { isAuthenticated, isLoading } = useConvexAuth();

  const viewState = routerState.location.pathname.split("/").pop() ?? "signin";

  const router = useRouter();

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: z.object({
        email: z.string().email(),
        password: z
          .string()
          .min(8, { message: "Password must be at least 8 characters long" }),
      }),
    },
    onSubmit: async ({ value }) => {
      const formData = new FormData();
      formData.set("email", value.email);
      formData.set("password", value.password);
      formData.set("flow", viewState === "signin" ? "signIn" : "signUp");

      await signIn("password", formData)
        .then(() => {
          window.location.reload();
        })
        .catch((e) => {
          if (e instanceof Error) {
            if (e.message.includes("InvalidSecret")) {
              return toast.error("Invalid email or password");
            }
          }

          toast.error("Something went wrong, Please try again.");
        });
    },
  });

  const state = {
    signin: {
      title: "Sign in to your Notable account",
      actionButtonText: "Sign in",
    },
    signup: {
      title: "Register your Notable account",
      actionButtonText: "Sign up",
    },
  }[viewState];

  useEffect(() => {
    if (isAuthenticated) {
      router.navigate({ to: "/app", replace: true });
    }
  }, [isAuthenticated]);

  if (isLoading || isAuthenticated) {
    return (
      <div className="h-svh w-full grid place-items-center">
        <SpinnerAnimationSvg className="w-5" />
      </div>
    );
  }

  if (!state) {
    return <p>Not found</p>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-background w-full max-w-md rounded-lg p-6 shadow-lg">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{state.title}</h1>
            <p className="text-muted-foreground">Enter your credentials.</p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="space-y-2">
              <form.AppField
                name="email"
                children={(field) => (
                  <field.TextField
                    label="Email"
                    inputProps={{ type: "email" }}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <form.AppField
                name="password"
                children={(field) => (
                  <field.TextField
                    label="password"
                    inputProps={{ type: "password" }}
                  />
                )}
              />
            </div>
            <form.AppForm>
              <form.SubscribeButton label={state.actionButtonText} />
            </form.AppForm>
          </form>
        </div>
      </div>
    </div>
  );
}
