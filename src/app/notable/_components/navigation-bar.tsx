"use client"

import { GearIcon } from "@radix-ui/react-icons"
import { Check, ChevronDown, FolderIcon, FolderOpenIcon, PlusIcon } from "lucide-react"

import useMockIsPending from "../../../hooks/use-mock-is-pending"

import { Pluralize } from "@/utils/pluralize"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import AnimationSpinner from "@/assets/icons/spinner-animation.svg"
import { useUser } from "@/context/auth-context"
import { cn } from "@/lib/utils"

const workspaceName = "Workplace Name"
const workspaceAvatar = "D"
const plan = "Free Plan"
const members = 1

const NavigationBar = () => {
  const [isPending, setIsPending] = useMockIsPending()

  return (
    <div className="h-full w-[300px] min-w-[300px] max-w-[300px] shrink-0 space-y-[30px] overflow-auto bg-background-primary py-1.5">
      <div className="px-1.5">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className="w-full justify-start">
              <Avatar className="size-5 rounded-sm">
                <AvatarFallback className="rounded-sm">{workspaceAvatar}</AvatarFallback>
              </Avatar>
              <p className="grow truncate text-left">{workspaceName}</p>
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-[350px] overflow-hidden rounded-[10px] p-0">
            <WorkspaceCard />
            <UserWorkspaces />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <div className="flex px-5">
          <p className="text-sm font-semibold opacity-60">Notes</p>
          <button className="ml-auto" onClick={() => setIsPending()} disabled={isPending}>
            {isPending ? (
              <AnimationSpinner className="size-5 opacity-45" />
            ) : (
              <PlusIcon className="size-5 opacity-45 transition-colors duration-200 hover:opacity-60" />
            )}
          </button>
        </div>
        <div className="flex flex-col gap-[5px] overflow-auto">
          {[
            { name: "Personal", id: "1", active: true },
            { name: "Work", id: "2", active: false },
            { name: "Travel", id: "3", active: false },
            { name: "Events", id: "4", active: false },
            { name: "Finances", id: "5", active: false },
          ].map((e) => (
            <Folder {...e} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Folder = ({ active, name }: { name: string; id: string; active: boolean }) => {
  const Icon = active ? FolderOpenIcon : FolderIcon

  return (
    <button className={cn("flex gap-3.5 px-5 py-2.5 transition-colors duration-200", active && "bg-white/5")}>
      <Icon className={cn("size-5 transition-colors duration-200", !active && "text-white/60")} />
      <p className={cn("text-left transition-colors duration-200", !active && "text-white/60")}>{name}</p>
    </button>
  )
}

const WorkspaceCard = () => {
  return (
    <div className="space-y-3 p-4">
      <div className="flex items-center gap-3">
        <Avatar className="rounded-lg">
          <AvatarFallback className="rounded-lg text-3xl">{workspaceAvatar}</AvatarFallback>
        </Avatar>
        <div className="truncate">
          <p className="truncate text-xl font-medium text-primary">{workspaceName} Notable</p>
          <p className="text-sm text-text-secondary">
            {plan} · <Pluralize count={members} singular="member" />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button>
          <GearIcon />
          <span>Settings</span>
        </Button>
      </div>
    </div>
  )
}

const UserWorkspaces = () => {
  const { user } = useUser()
  return (
    <div className="mt-3 w-full space-y-2 border-t border-t-zinc-600 bg-secondary px-3 py-2">
      <p className="text-xs text-zinc-400">{user.email}</p>
      {[{ id: "1" }].map((workspace) => (
        <Button key={workspace.id} variant={"ghost"} className="w-full justify-start hover:bg-white/15">
          <Avatar className="size-5 rounded-sm bg-background">
            <AvatarFallback className="rounded-sm bg-background">{workspaceAvatar}</AvatarFallback>
          </Avatar>
          <p className="grow truncate text-left">{workspaceName}</p>
          <Check />
        </Button>
      ))}
    </div>
  )
}

export default NavigationBar
