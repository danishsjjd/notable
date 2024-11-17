"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { useRouter } from "next/navigation"

import useSupabaseBrowser from "@/utils/supabase/supabase-browser"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useUser } from "@/context/auth-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js"
import { toast } from "sonner"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
})

const AuthPage = ({ page }: { page: "login" | "signup" }) => {
  const router = useRouter()

  const { setUser } = useUser(false)

  const supabase = useSupabaseBrowser()
  const signUp = useMutation({ mutationFn: (props: SignUpWithPasswordCredentials) => supabase.auth.signUp(props) })
  const signIn = useMutation({
    mutationFn: (props: SignUpWithPasswordCredentials) => supabase.auth.signInWithPassword(props),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (page === "login") {
      signIn.mutate(data, {
        onSuccess(data) {
          if (data.error) {
            toast.error(data.error.message)

            return
          }

          if (data.data.session) {
            setUser(data.data.user)
            router.push("/dashboard")
          }
        },
      })

      return
    }

    signUp.mutate(
      { ...data, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL!}/dashboard/login` } },
      {
        async onSuccess(data) {
          if (data.error) {
            toast.error(data.error.message)

            return
          }

          const isEmailVerified = data.data.user?.user_metadata?.email_verified
          if (typeof isEmailVerified === "boolean" && isEmailVerified === false) {
            toast.success("Verification email is sent!")
            form.reset()
          } else {
            toast.info("An account with the associated email already exists. Please login.")
            router.push("/dashboard/login")
          }
        },
      }
    )
  }

  const state = {
    login: {
      title: "Login to your Notable account",
      actionButtonText: "Login",
    },
    signup: {
      title: "Register your Notable account",
      actionButtonText: "Sign up",
    },
  }[page]

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{state.title}</h1>
            <p className="text-muted-foreground">Enter your credentials.</p>
          </div>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{page === "signup" && "Work "}Email</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{page === "signup" && "Create "}Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} autoComplete={"false"} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={signUp.isPending}
                isPending={signUp.isPending || signIn.isPending}
              >
                <span>{state.actionButtonText}</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
