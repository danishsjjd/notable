import BillingSettings from "@/components/settings/billing-settings";
import CollaboratorsSettings from "@/components/settings/collaborators-settings";
import ProfileSettings from "@/components/settings/profile-settings";
import WorkspaceSettings from "@/components/settings/workspace-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, User, Users } from "lucide-react";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto max-w-4xl p-4 md:p-8">
        <h1 className="mb-6 text-2xl font-bold">Settings</h1>

        <Tabs defaultValue="workspace" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-4">
            <TabsTrigger value="workspace" className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 text-primary">
                <span className="text-xs">D</span>
              </div>
              <span>Workspace</span>
            </TabsTrigger>
            <TabsTrigger
              value="collaborators"
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              <span>Collaborators</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workspace">
            <WorkspaceSettings />
          </TabsContent>

          <TabsContent value="collaborators">
            <CollaboratorsSettings />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
