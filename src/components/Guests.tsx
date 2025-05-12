"use client";
import { Guest } from "@/generated/prisma";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import GuestRow from "./GuestRow";

function Guests() {
  const [guests, setGuests] = useState([]);

  async function fetchGuests() {
    try {
      const res = await axios.get("/api/guests");
      setGuests(res.data);
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
      } else toast.error(e.message);
    }
  }

  function sendWhatsAppMessage(g: Guest) {
    const link = "https://wa.me/" + g.phone + "?text=Hola";
  }

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center justify-center text-white text-xl">
      <h1>Invitados</h1>
      <table>
        <thead>
          <tr>
            <th className="p-2 border-2 border-white">Id</th>
            <th className="p-2 border-2 border-white">Nombre</th>
            <th className="p-2 border-2 border-white">Teléfono</th>
            <th className="p-2 border-2 border-white">Tipo</th>
            <th className="p-2 border-2 border-white">Invitados</th>
            <th className="p-2 border-2 border-white">Enviar</th>
            <th className="p-2 border-2 border-white">
              Enviado por ultima vez
            </th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g: Guest) => (
            <GuestRow g={g} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Guests;
