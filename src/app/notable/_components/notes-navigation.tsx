import { cn } from "@/lib/utils"
import { format, subDays } from "date-fns"

const notes = [
  {
    id: "1",
    title: "My Goals for the Next Year",
    content: "As the year comes to a Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 1),
  },
  {
    id: "2",
    title: "Reflection on the Month of June",
    content: "It's hard to believe that Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 2),
  },
  {
    id: "3",
    title: "My Favorite Memories from Childhood",
    content: "I was reminiscing about Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 3),
  },
  {
    id: "4",
    title: "Reflections on My First Year of College",
    content: "It's hard to believe that Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 4),
  },
  {
    id: "5",
    title: "My Experience with Meditation",
    content: "I've been trying to Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 5),
  },
  {
    id: "6",
    title: "Thoughts on the Pandemic",
    content: "It's hard to believe that Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 6),
  },
  {
    id: "7",
    title: "My Favorite Recipes",
    content: "I love cooking and trying Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quam!",
    createdAt: subDays(new Date(), 7),
  },
]

const NotesNavigation = () => {
  return (
    <div className="w-[350px] min-w-[350px] max-w-[350px] overflow-auto bg-background-secondary px-5 pb-[30px]">
      <h2 className="sticky top-0 bg-background-secondary py-[30px] text-xl font-semibold text-white">Personal</h2>
      <div className="space-y-5">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
  )
}

const NoteCard = ({
  id,
  content,
  createdAt,
  title,
}: {
  title: string
  createdAt: Date
  content: string
  id: string
}) => {
  const active = id === "2"
  return (
    <div className={cn("space-y-2.5 rounded-[3px] bg-white/[0.03] p-5", active && "bg-white/10")}>
      <button className="text-left text-lg font-semibold text-white">{title}</button>
      <p className="flex gap-2.5 truncate">
        <span className="text-white/40">{format(createdAt, "dd/MM/yyyy")}</span>
        <span className="truncate text-white/60">{content}</span>
      </p>
    </div>
  )
}

export default NotesNavigation
