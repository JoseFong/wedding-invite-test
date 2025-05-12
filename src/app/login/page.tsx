"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function login() {
    try {
      const data = {
        password: password,
      };
      const res = await axios.post("/api/login", data);
      router.push("/admin");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else toast.error(e.message);
    }
  }

  return (
    <div className="min-w-screen min-h-screen bg-zinc-900 flex items-center justify-center text-white flex-col text-2xl gap-2">
      <h1>Contraseña:</h1>
      <input
        className="text-black py-1 px-2 rounded-md"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant={"secondary"} onClick={login}>
        Aceptar
      </Button>
    </div>
  );
}

export default Login;
