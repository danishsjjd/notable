import SpinnerAnimationSvg from "@/assets/icons/spinner-animation-svg";
import NavigationBar from "@/components/app/navigation-bar";
import Note from "@/components/app/note";
import NotesNavigation from "@/components/app/notes-navigation";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { api } from "convex/_generated/api";
import { useConvexAuth, useQuery } from "convex/react";
import { useEffect } from "react";

export const Route = createFileRoute("/app")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const user = useQuery(api.users.viewer);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.navigate({ to: "/", replace: true });
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated || !user) {
    return (
      <div className="grid h-svh w-full place-items-center">
        <SpinnerAnimationSvg />
      </div>
    );
  }

  return <App />;
}

function App() {
  return (
    <div className="body-overflow-y-hidden flex h-svh max-h-svh min-h-svh min-w-[1250px]">
      <NavigationBar />
      <NotesNavigation />
      <Note />
    </div>
  );
}
