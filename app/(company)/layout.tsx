import { ReactNode } from "react";
import NavbarPage from "../components/navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <NavbarPage />
        {children}
      </main>
    </>
  );
}
