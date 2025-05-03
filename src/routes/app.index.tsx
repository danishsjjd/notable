import { createFileRoute } from "@tanstack/react-router";
import Note from "@/components/app/note";
import NotesNavigation from "@/components/app/notes-navigation";

export const Route = createFileRoute("/app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NotesNavigation />
      <Note />
    </>
  );
}
