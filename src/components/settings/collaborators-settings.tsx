import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus } from "lucide-react";

type Collaborator = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  avatar?: string;
};

export default function CollaboratorsSettings() {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
    },
    {
      id: "2",
      name: "Sam Taylor",
      email: "sam@example.com",
      role: "Editor",
    },
    {
      id: "3",
      name: "Jordan Lee",
      email: "jordan@example.com",
      role: "Viewer",
    },
  ]);

  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"Admin" | "Editor" | "Viewer">(
    "Editor"
  );

  const removeCollaborator = (id: string) => {
    setCollaborators(collaborators.filter((c) => c.id !== id));
  };

  const addCollaborator = () => {
    if (!inviteEmail) return;

    const newCollaborator: Collaborator = {
      id: Math.random().toString(36).substring(7),
      name: inviteEmail.split("@")[0],
      email: inviteEmail,
      role: inviteRole,
    };

    setCollaborators([...collaborators, newCollaborator]);
    setInviteEmail("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaborators</CardTitle>
        <CardDescription>
          Invite team members to collaborate on your workspace.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-[1fr_150px_40px] gap-4 font-medium text-sm text-muted-foreground">
            <div>User</div>
            <div>Role</div>
            <div></div>
          </div>

          {collaborators.map((collaborator) => (
            <div
              key={collaborator.id}
              className="grid grid-cols-[1fr_150px_40px] gap-4 items-center"
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={collaborator.avatar || "/placeholder.svg"}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {collaborator.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{collaborator.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {collaborator.email}
                  </div>
                </div>
              </div>
              <Select defaultValue={collaborator.role}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCollaborator(collaborator.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <h3 className="mb-4 text-sm font-medium">Invite New Members</h3>
          <div className="grid grid-cols-[1fr_150px_auto] gap-4 items-end">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="colleague@example.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={inviteRole}
                onValueChange={(value) => setInviteRole(value as any)}
              >
                <SelectTrigger id="role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={addCollaborator}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              <span>Invite</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
