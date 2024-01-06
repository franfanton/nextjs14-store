import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Navegation for Cateries</nav>
      {children}
    </main>
  );
}
