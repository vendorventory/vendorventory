// app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  // 1. Check if user is logged in
  const session = await auth();

  // 2. If not logged in, kick them to login page
  if (!session?.user) {
    redirect("/login");
  }

  // 3. If logged in, show the dashboard and pass the user data
  return <DashboardClient user={session.user} />;
}