"use client";

import { useEffect, useState, createContext } from "react";

import StepForm from "@/components/form/step-form";
import Status from "@/components/status";
import Spinner from "@/components/spinner";

export type UserContextType = {
  user: string | null,
  setUser: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType | null>(null);

export default function Page() {
  const [isRegisteredUser, setRegisteredUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const alreadyRegistered = sessionStorage.getItem("user_approved");
    setRegisteredUser(alreadyRegistered);
    setLoading(false);
  }, [isRegisteredUser]);

  const mainComponent = isRegisteredUser ? (
    <Status />
  ) : (
    <StepForm />
  );

  const userContext = {
    user: isRegisteredUser,
    setUser: setRegisteredUser,
  } as UserContextType;

  if (loading) return <Spinner />;

  return (
    <UserContext.Provider value={userContext}>
      <main className="pt-20 px-3.5 h-screen font-[family-name:var(--font-geist-sans)] flex flex-col justify-center items-center sm:grid sm:grid-cols-4">
        {mainComponent}
      </main>
    </UserContext.Provider>
  );
}
