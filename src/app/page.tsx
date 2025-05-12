import { redirect } from "next/navigation";
import React from "react";

function HomePage() {
  redirect("/invitation");

  return <div>HomePage</div>;
}

export default HomePage;
