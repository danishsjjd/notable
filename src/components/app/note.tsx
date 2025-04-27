import {
  BoldIcon,
  CalendarDaysIcon,
  ChevronDown,
  Folder,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MenuIcon,
  TableIcon,
  UnderlineIcon,
} from "lucide-react";
import type { ElementType } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

const title = "Reflection on the Month of June";

const Note = () => {
  return (
    <div className="bg-background-primary grow space-y-[30px] overflow-auto p-12">
      <div className="flex items-center justify-between gap-1.5">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <button className="grid size-5 shrink-0 place-items-center rounded-full border border-white/40 text-white/40">
          <MenuIcon className="size-3.5" />
        </button>
      </div>

      <div className="space-y-[15px] divide-y divide-white/10">
        <Field
          Icon={CalendarDaysIcon}
          fieldKey="Date"
          value="21/6/2022"
          className="pt-0"
        />
        <Field Icon={Folder} fieldKey="Folder" value="Personal" />
      </div>

      <div className="bg-background-primary sticky top-[-50px] flex items-center gap-[30px] border-y border-y-white/10 py-2.5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2">
              <p className="min-w-[105px]">Paragraph</p>
              <ChevronDown className="size-5 text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Heading 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2">
              <p className="min-w-[16px]">16</p>
              <ChevronDown className="size-5 text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>18 px</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2.5">
          <BoldIcon className="size-5 stroke-[3px] text-white" />
          <ItalicIcon className="size-5 text-white" />
          <UnderlineIcon className="size-5 text-white" />
        </div>

        <div className="flex items-center gap-2.5">
          <ImageIcon className="size-5 text-white" />
          <LinkIcon className="size-5 text-white" />
        </div>

        <TableIcon className="size-5 text-white" />
      </div>

      <p
        className="text-white"
        dangerouslySetInnerHTML={{
          __html: `It's hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.

One of the best things that happened was getting promoted at work. I've been working really hard and it's great to see that effort recognized. It's also exciting to have more responsibility and the opportunity to contribute to the company in a bigger way. I'm looking forward to taking on new challenges and learning as much as I can in my new role.

I also had a great time on my vacation to Hawaii. The beaches were beautiful and I loved trying all of the different types of Hawaiian food. It was nice to relax and get away from the daily grind for a bit. I'm so grateful to have had the opportunity to take a trip like that.

On the downside, I feel like I didn't make as much progress on my fitness goals as I would have liked. I was really busy with work and didn't make it to the gym as often as I planned. I'm going to try to be more consistent in July and make exercise a higher priority. I know it will be good for my physical and mental health.

I also had a few rough patches in my relationships this month. I had a couple of misunderstandings with friends and it was hard to navigate those conflicts. But I'm glad we were able to talk things through and move past them. I value my relationships and I want to make sure I'm always working to be a good friend.

Overall, it was a good month with a mix of ups and downs. I'm looking forward to what July has in store! I'm hoping to make some more progress on my goals and spend quality time with the people I care about.`,
        }}
      />
    </div>
  );
};

const Field = ({
  Icon,
  fieldKey,
  value,
  className,
}: {
  fieldKey: string;
  value: string;
  Icon: ElementType;
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-[30px_100px_1fr] pt-[15px]", className)}>
      <Icon className="size-[18px] text-white/60" />
      <p className="truncate text-sm font-semibold text-white/60">{fieldKey}</p>
      <p className="text-sm font-semibold text-white underline">{value}</p>
    </div>
  );
};

export default Note;
