"use client";
import { SessionProvider } from "next-auth/react";

export function SessionProvi({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
