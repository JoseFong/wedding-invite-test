"use client";
import { Guest } from "@/generated/prisma";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Invitation() {
  const [guest, setGuest] = useState<Guest>();

  const router = useRouter();
  useEffect(() => {
    const url = window.location.href;
    const id: any = url.split("/").pop();
    fetchGuest(id);
  }, []);

  async function fetchGuest(id: string) {
    try {
      const res = await axios.get("/api/guests/" + id);
      setGuest(res.data);
    } catch (e: any) {
      router.push("/invitation");
    }
  }

  return (
    <div>HOLA {guest?.name} ESTAS INVITADO(A) A LA BODA DE ANA Y LUIS</div>
  );
}

export default Invitation;
