import React from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Guests from "@/components/Guests";
import { redirect } from "next/navigation";

async function Admin() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("user");
    if (!cookie) {
      redirect("/login");
    } else {
      const decoded: any = jwt.verify(cookie.value, process.env.JWT_SECRET!);
    }
  } catch (e: any) {
    redirect("/login");
  }

  return (
    <div className="min-w-screen min-h-screen bg-zinc-800 flex items-center justify-center">
      <Guests />
    </div>
  );
}

export default Admin;
