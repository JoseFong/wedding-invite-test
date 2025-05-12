"use client";
import { Guest } from "@/generated/prisma";
import React from "react";

function GuestRow({ g }: { g: Guest }) {
  const url =
    "https://wa.me/" +
    g.phone +
    "?text=¡Hola " +
    g.name +
    ", estás oficialmente invitada(o)! a la boda de Ana y Luis, esperamos contar con tu presencia! https://localhost:3000/" +
    g.id +
    ".com";

  return (
    <tr>
      <td className="p-2 border-2 border-white">{g.id}</td>
      <td className="p-2 border-2 border-white">{g.name}</td>
      <td className="p-2 border-2 border-white">{g.phone}</td>
      <td className="p-2 border-2 border-white">{g.type}</td>
      <td className="p-2 border-2 border-white">{g.plus}</td>
      <td className="p-2 border-2 border-white">
        <a href={url} target="_blank" className="underline">
          Enviar mensaje por WhatsApp
        </a>
      </td>
      <td className="p-2 border-2 border-white">{g.sent && <>{g.sent}</>}</td>
    </tr>
  );
}

export default GuestRow;
