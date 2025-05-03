import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, AlertCircle } from "lucide-react";

export default function BillingSettings() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plan</CardTitle>
          <CardDescription>
            Manage your subscription and billing details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="pro" className="grid gap-4">
            <div className="relative rounded-lg border p-4 hover:border-primary">
              <RadioGroupItem
                value="free"
                id="free"
                className="absolute right-4 top-4"
              />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="free" className="text-base font-medium">
                    Free
                  </Label>
                  <Badge variant="outline" className="ml-2">
                    Current
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Basic features for personal use.
                </p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>5 notes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Basic formatting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Mobile access</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg border p-4 hover:border-primary">
              <RadioGroupItem
                value="pro"
                id="pro"
                className="absolute right-4 top-4"
              />
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pro" className="text-base font-medium">
                    Pro
                  </Label>
                  <Badge className="ml-2 bg-primary">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced features for professionals.
                </p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited notes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Advanced formatting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Version history</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-lg border p-4 hover:border-primary">
              <RadioGroupItem
                value="team"
                id="team"
                className="absolute right-4 top-4"
              />
              <div className="grid gap-2">
                <Label htmlFor="team" className="text-base font-medium">
                  Team
                </Label>
                <p className="text-sm text-muted-foreground">
                  Premium features for teams and organizations.
                </p>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold">$19.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Team workspaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Admin controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Upgrade Plan</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Update your payment information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted/50">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">
                    Expires 12/2024
                  </p>
                </div>
              </div>
              <Badge variant="outline">Default</Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="h-4 w-4" />
            <span>Your subscription will renew on May 15, 2025</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
          <Button variant="outline">Add Payment Method</Button>
          <Button variant="outline">Billing History</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
